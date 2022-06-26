const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
// Save refreshToken
let refreshTokens = [];

// Handle Logic
const authControllers = {
  // Register
  register: async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;

    try {
      // Check email exist
      const existedUser = await User.findOne({
        email: req.body.email,
      });

      if (existedUser)
        return res.status(400).json({
          message: "Email đã tồn tại",
          success: false,
        });

      // Hash password
      const salt = bcrypt.genSaltSync(10);
      const hashPass = bcrypt.hashSync(password, salt);

      // Create + Save user
      const newUser = new User({
        firstName,
        lastName,
        email,
        password: hashPass,
      });

      const user = await newUser.save();
      return res.status(200).json({
        message: "Đăng kí thành công!",
        success: true,
        user,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Lỗi server!",
        success: false,
      });
    }
  },
  // Generate AccessToken
  generateAccesstoken: (user) => {
    return jwt.sign(
      {
        _id: user._id,
        admin: user.admin,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "10d",
      }
    );
  },

  // Generate RefreshToken
  generateRefreshToken: (user) => {
    return jwt.sign(
      {
        _id: user._id,
        admin: user.admin,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "365d",
      }
    );
  },

  // Login
  login: async (req, res, next) => {
    try {
      // Find User
      const user = await User.findOne({
        email: req.body.email,
      });

      // Validate
      if (!user)
        return res.status(400).json({
          message: "Không tìm thấy người dùng!",
          success: false,
        });
      const validPassword = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!validPassword)
        return res.status(400).json({
          message: "Mật khẩu không chính xác!",
          success: false,
        });

      // Handle Token
      const accessToken = authControllers.generateAccesstoken(user);
      const refreshToken = authControllers.generateRefreshToken(user);

      refreshTokens.push(refreshToken);

      // Save refresh token to cookie
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: false,
        path: "/",
        sameSite: "strict",
      });

      const { password, ...others } = user._doc;

      // Pass all
      return res.status(200).json({
        message: "Đăng nhập thành công !",
        success: true,
        user: {
          ...others,
          accessToken,
        },
      });
    } catch (error) {
      return res.status(500).json({
        message: "Lỗi server!",
        success: false,
      });
    }
  },

  // Refesh token
  refreshToken: async (req, res, next) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken)
      return res
        .status(401)
        .json({ message: "Bạn chưa đăng nhập!", success: false });
    if (!refreshTokens.includes(refreshToken))
      return res
        .status(401)
        .json({ message: "Token không hợp lệ!", success: false });

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      // Check refresh token expire
      if (err) {
        return res.status(403).json({
          message: "Refresh Token hết hạn vui lòng đăng nhập lại!",
          success: false,
        });
      }

      // Delete old refresh token
      refreshTokens = refreshTokens.filter(
        (token, index) => token !== refreshToken
      );

      // Create new accessToken,refreshToken
      const newAccessToken = authControllers.generateAccesstoken(user);
      const newRefreshToken = authControllers.generateRefreshToken(user);

      refreshTokens.push(newRefreshToken);

      // Save new refresh token to cookies
      res.cookie("refreshToken", newRefreshToken, {
        httpOnly: true,
        secure: false,
        path: "/",
        sameSite: "strict",
      });

      // Pass all
      return res.status(200).json({
        accessToken: newAccessToken,
      });
    });
  },

  // Logout
  logout: async (req, res, next) => {
    refreshTokens = [];
    res.clearCookie("refreshToken");
    return res
      .status(200)
      .json({ message: "Đăng xuất thành công", success: true });
  },

  // Check Login
  checkLogin: async (req, res, next) => {
    const user = await User.findById(req.user._id).select("-password");
    if (!user)
      return res.status(400).json({
        success: false,
        message: "Không tìm thấy người dùng",
      });
    return res.status(200).json({
      success: true,
      user,
    });
  },
};

module.exports = authControllers;

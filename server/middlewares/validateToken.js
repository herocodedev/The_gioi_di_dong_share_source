const jwt = require("jsonwebtoken");

const middlewareController = {
  // verifyToken
  verifyToken: (req, res, next) => {
    const token = req.headers.authorization;
    const accessToken = token.split(" ")[1];
    if (accessToken) {
      jwt.verify(
        accessToken,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
          if (err) {
            console.log(err);
            return res.status(403).json({
              success: false,
              message: "Bạn đã quá hạn đăng nhập",
            });
          }
          req.user = decoded;
          next();
        }
      );
    } else {
      return res.status(401).json({
        success: false,
        message: "Bạn chưa đăng nhập!",
      });
    }
  },

  // verifyToken Admin
  verifyTokenAdmin: (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
      const accessToken = token.split(" ")[1];
      jwt.verify(
        accessToken,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
          if (err) {
            console.log(err);
            return res.status(403).json({
              success: false,
              message: "Bạn đã quá hạn đăng nhập",
            });
          }
          req.user = decoded;
          if (decoded.admin) return next();
          else
            return res.status(400).json({
              success: false,
              message: "Bạn không đủ quyền truy cập",
            });
        }
      );
    } else {
      return res.status(401).json({
        success: false,
        message: "Bạn chưa đăng nhập!",
      });
    }
  },
};

module.exports = { middlewareController };

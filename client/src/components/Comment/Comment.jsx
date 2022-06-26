import StarIcon from "@mui/icons-material/Star";
import { Button, createTheme, TextField, ThemeProvider } from "@mui/material";
import { useFormik } from "formik";
import React, { memo } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51d5",
    },
    secondary: {
      main: "#ffc400",
    },
  },
});
function Comment(props) {
  const [arrStar, setArrStar] = React.useState([]);
  const {
    name,
    category,
    idProduct,
    firstImage,
    isLogin,
    user,
    action,
    value,
    star,
    idComment,
  } = props;
  const dispatch = useDispatch();
  const { handleSubmit, values, errors, touched, handleChange, setFieldValue } =
    useFormik({
      initialValues: {
        category,
        idUser: user._id,
        idProduct,
        firstName: user.firstName,
        lastName: user.lastName,
        comment: value,
        star: star ? star : arrStar.length,
      },
      validationSchema: Yup.object({
        comment: Yup.string().required("Bạn không được bỏ trống"),
      }),
      onSubmit: (values) => {
        console.log("values: ", values);
        if (isLogin) {
          if (idComment) {
            dispatch({
              type: action,
              data: { ...values, idComment },
            });
          } else {
            dispatch({
              type: action,
              data: values,
            });
          }
        } else {
          alert("Vui lòng đăng nhập để đánh giá!");
        }
      },
    });

  const renderStar = () => {
    let jsx = [];
    for (let i = 0; i < 5; i++) {
      jsx.push(
        <div
          onClick={() => {
            let newArrStar = [...arrStar];
            const isExited = newArrStar.findIndex((x, y) => x === i);
            if (isExited !== -1) {
              newArrStar = newArrStar.filter((x, y) => x !== i);
            } else {
              newArrStar.push(i);
            }
            setArrStar(newArrStar);
            setFieldValue("star", newArrStar.length);
          }}
          className=""
          key={i}
        >
          <StarIcon
            className={`${
              arrStar.includes(i) ? "text-orange-600" : "text-gray-400"
            }`}
          />
        </div>
      );
    }
    return jsx;
  };

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={handleSubmit} className="form-comment-submit">
        <div className="flex gap-2 justify-center">
          <img
            src={firstImage}
            className="object-contain w-[50px] h-[50px]"
            alt=""
          />
          <h1 className="text-[18px] font-semibold m-auto">{name}</h1>
        </div>
        <h2 className="my-2">Nhập nội dung:</h2>
        <TextField
          value={values.comment}
          onChange={handleChange}
          name="comment"
          className="w-[100%] input-comment"
          id="standard-basic"
          label="Đánh giá"
          variant="standard"
        />

        <div className="flex gap-2 my-2">{renderStar()}</div>
        <div className="my-4">
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Gửi
          </Button>
        </div>
      </form>
    </ThemeProvider>
  );
}

export default memo(Comment);

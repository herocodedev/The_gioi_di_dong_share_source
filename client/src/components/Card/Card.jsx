import StarIcon from "@mui/icons-material/Star";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import * as React from "react";
import { Link } from "react-router-dom";
import percentBlue from "../../assests/img/percent_blue.png";
import "./Card.css";
export default function CardCustom(props) {
  const { product } = props;
  return (
    <Link to={`/${product?.category}/${product?._id}`}>
      <Card sx={{ maxWidth: 345 }} className="px-2 py-4 h-full cursor-pointer">
        <CardMedia
          component="img"
          style={{ height: "250px", objectFit: "contain" }}
          image={product?.images[0]?.imgs[0]?.url}
          alt="green iguana"
        />
        <CardContent className="h-[150px]">
          <div className="flex h-[20px] rounded-xl ct-label">
            <img src={percentBlue} className="h-full -translate-x-2" alt="" />
            <span className={"text-white font-semibold text-sm "}>
              Lễ lớn sale lớn
            </span>
          </div>
          <p className="text-sm mt-2 h-[38px] text-struncate-card-ct">
            🌺{product.name}🌺
          </p>

          <div className="flex gap-2 mt-4">
            <div className="basis-1/2 text-center text-[12px] border-2 boder-gray-400 px-2">
              {product.category}
            </div>
            {product.brand && (
              <div className="basis-1/2 text-center text-[12px] border-2 boder-gray-400 px-2">
                {product.brand}
              </div>
            )}
          </div>
          <div className="price my-2 font-semibold text-[#dd021c] text-xl flex justify-between">
            <span>
              {product.price.toLocaleString("en-US", {
                currency: "USD",
              })}
              đ
            </span>
            <span className="text-red-400 text-sm">-5%</span>
          </div>
        </CardContent>
        <CardActions>
          <div className="text-yellow-500 font-semibold flex items-center">
            <StarIcon className="ml-1" style={{ fontSize: "1.2rem" }} />
            <StarIcon className="ml-1" style={{ fontSize: "1.2rem" }} />
            <StarIcon className="ml-1" style={{ fontSize: "1.2rem" }} />
            <StarIcon className="ml-1" style={{ fontSize: "1.2rem" }} />
            <StarIcon className="ml-1" style={{ fontSize: "1.2rem" }} />
          </div>
        </CardActions>
      </Card>
    </Link>
  );
}

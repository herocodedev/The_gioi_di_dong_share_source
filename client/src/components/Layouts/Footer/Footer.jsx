import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import asscociation from "../../../assests/img/footer-2.png";
function Footer(props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-12 py-4 sm:mt-0">
      <div className="border-b-2 sm:border-0 py-2">
        <ul>
          <li className="py-2 hover:text-sky-400 transition-all duration-300 ease-in-out cursor-pointer">
            lịch sử mua hàng
          </li>
          <li className="py-2 hover:text-sky-400 transition-all duration-300 ease-in-out cursor-pointer">
            Cộng tác bán hàng cùng TGDĐ
          </li>
          <li className="py-2 hover:text-sky-400 transition-all duration-300 ease-in-out cursor-pointer">
            Tìm hiểu về mua trả góp
          </li>
          <li className="py-2 hover:text-sky-400 transition-all duration-300 ease-in-out cursor-pointer">
            Chính sách bảo hành
          </li>
          <li className="py-2 hover:text-sky-400 transition-all duration-300 ease-in-out cursor-pointer">
            Xem thêm
          </li>
        </ul>
      </div>
      <div className="border-b-2 sm:border-0 py-2">
        <ul>
          <li className="py-2 hover:text-sky-400 transition-all duration-300 ease-in-out cursor-pointer">
            Giới thiệu công ty (MWG.vn)
          </li>
          <li className="py-2 hover:text-sky-400 transition-all duration-300 ease-in-out cursor-pointer">
            Tuyển dụng
          </li>
          <li className="py-2 hover:text-sky-400 transition-all duration-300 ease-in-out cursor-pointer">
            Gửi góp ý, khiếu nại
          </li>
          <li className="py-2 hover:text-sky-400 transition-all duration-300 ease-in-out cursor-pointer">
            Tìm siêu thị (3.126 shop)
          </li>
          <li className="py-2 hover:text-sky-400 transition-all duration-300 ease-in-out cursor-pointer">
            Xem bản mobile
          </li>
        </ul>
      </div>

      <div className="border-b-2 sm:border-0 py-2">
        <ul>
          <li className="py-2 transition-all duration-300 ease-in-out cursor-pointer">
            <strong>Tổng đài hỗ trợ </strong> (Miễn phí gọi)
          </li>
          <li>Tuyển dụng</li>
          <li className="py-2">
            Gọi mua: <strong className="text-sky-600">1800.123456</strong> (7:30
            - 22:00)
          </li>
          <li className="py-2">
            {" "}
            Kĩ thuật: <strong className="text-sky-600">1800.123456</strong>{" "}
            (7:30 - 22:00)
          </li>
          <li className="py-2">
            {" "}
            Bảo hành: <strong className="text-sky-600">1800.123456</strong>{" "}
            (7:30 - 22:00)
          </li>
          <li className="py-2">
            {" "}
            Khiếu nại: <strong className="text-sky-600">
              1800.123456
            </strong>{" "}
            (7:30 - 22:00)
          </li>
        </ul>
      </div>

      <div className="border-b-2 sm:border-0 py-2">
        <ul>
          <li className="flex gap-2 items-center text-sm">
            <div className="text-sky-600">
              <FacebookIcon />
              3743.6k Fan{" "}
            </div>
            <div className="text-red-600">
              <YouTubeIcon />
              3743.6k Fan{" "}
            </div>
          </li>
          <li className="gap-2 items-center text-sm flex flex-col">
            <p className="text-left">Website cùng tập đoàn</p>
            <img src={asscociation} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;

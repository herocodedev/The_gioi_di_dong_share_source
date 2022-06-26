import React from "react";
import headphone from "../../../assests/img/headphone_small.png";
import keyboard from "../../../assests/img/keyboard_accessory.png";
import mouse from "../../../assests/img/mouse_accessory.png";
import pin from "../../../assests/img/pin.png";
import pin_backup from "../../../assests/img/pin_backup.png";

function StyleAccessory(props) {
  return (
    <div className="">
      <h1 className="font-bold text-xl uppercase">phụ kiện nổi bật</h1>
      <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-5 gap-8 h-full">
        <a href="#pin-accessory">
          <div className="flex items-center my-1 justify-between py-2 rounded-lg cursor-pointer flex-col">
            <div className="flex flex-col items-center">
              <img
                className="w-[60%]"
                src={pin_backup}
                style={{
                  padding: "0.5rem",
                  borderRadius: "50px",
                  color: "#fff",
                  backgroundColor: "#f7b42c",
                  backgroundImage:
                    "linear-gradient(315deg, #f7b42c 0%, #fc575e 74%)",
                }}
                alt=""
              />
            </div>
            <span className="text-black text-struncate text-center mt-2">
              Sạc dự phòng
            </span>
          </div>
        </a>
        <a href="#charing-cable-accessory">
          <div className="flex items-center my-1 justify-between py-2 rounded-lg cursor-pointer flex-col">
            <div className="flex flex-col items-center">
              <img
                src={pin}
                className="w-[60%]"
                style={{
                  padding: "0.5rem",
                  borderRadius: "50px",
                  color: "#fff",
                  fontSize: "4rem",
                  backgroundColor: "#f6d327",
                  backgroundImage:
                    "linear-gradient(315deg, #f6d327 0%, #de4daa 74%)",
                }}
                alt=""
              />
            </div>
            <span className="text-black text-struncate text-center mt-2">
              Cáp sạc
            </span>
          </div>
        </a>
        <a href="#apple-accessory" className="">
          <div className="flex items-center my-1 justify-between py-2 rounded-lg cursor-pointer flex-col">
            <div className="flex flex-col items-center">
              <img
                src={headphone}
                className="w-[60%]"
                style={{
                  padding: "0.5rem",
                  borderRadius: "50px",
                  color: "#fff",
                  fontSize: "4rem",
                  backgroundColor: "#2f4353",
                  backgroundImage:
                    "linear-gradient(315deg, #2f4353 0%, #d2ccc4 74%)",
                }}
                alt=""
              />
            </div>
            <span className="text-black text-struncate text-center mt-2">
              Phụ kiện apple
            </span>
          </div>
        </a>
        <a href="#gamming-accessory" className="">
          <div className="flex items-center my-1 justify-between py-2 rounded-lg cursor-pointer flex-col">
            <div className="flex flex-col items-center">
              <img
                src={mouse}
                className="w-[60%]"
                style={{
                  padding: "0.5rem",
                  borderRadius: "50px",
                  color: "#fff",
                  fontSize: "4rem",
                  backgroundColor: "#eec0c6",
                  backgroundImage:
                    "linear-gradient(315deg, #eec0c6 0%, #7ee8fa 74%)",
                }}
                alt=""
              />
            </div>
            <span className="text-black text-struncate text-center mt-2">
              Chuột
            </span>
          </div>
        </a>
        <a href="#gamming-accessory" className="">
          <div className="flex items-center my-1 justify-between py-2 rounded-lg cursor-pointer flex-col">
            <div className="flex flex-col items-center">
              <img
                src={keyboard}
                className="w-[60%]"
                style={{
                  padding: "0.5rem",
                  borderRadius: "50px",
                  color: "#fff",
                  fontSize: "4rem",
                  backgroundColor: "#7f53ac",
                  backgroundImage:
                    "linear-gradient(315deg, #7f53ac 0%, #647dee 74%)",
                }}
                alt=""
              />
            </div>
            <span className="text-black text-struncate text-center mt-2">
              Bàn phím
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default StyleAccessory;

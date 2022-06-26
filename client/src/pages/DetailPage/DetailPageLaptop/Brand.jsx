import AcUnitIcon from "@mui/icons-material/AcUnit";
import AppleIcon from "@mui/icons-material/Apple";
import CodeIcon from "@mui/icons-material/Code";
import DiamondIcon from "@mui/icons-material/Diamond";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import acerLap from "../../../assests/img/acer_laptop.png";
import advertisementLaptop from "../../../assests/img/advertisement_5_laptop.png";
import asusLap from "../../../assests/img/asus_laptop.png";
import dellLap from "../../../assests/img/dell_laptop.png";
import hpLap from "../../../assests/img/hp_laptop.png";
import lenoveLap from "../../../assests/img/lenovo_laptop.png";
import lgLap from "../../../assests/img/lg_laptop.png";
import macbookLap from "../../../assests/img/macbook_laptop.png";
import msiLap from "../../../assests/img/msi_laptop.png";
const data = [
  {
    img: macbookLap,
    name: "macbook",
  },
  {
    img: asusLap,
    name: "macbook",
  },
  {
    img: hpLap,
    name: "macbook",
  },
  {
    img: lenoveLap,
    name: "macbook",
  },
  {
    img: acerLap,
    name: "macbook",
  },
  {
    img: dellLap,
    name: "macbook",
  },
  {
    img: msiLap,
    name: "macbook",
  },
  {
    img: lgLap,
    name: "macbook",
  },
];
function Brand(props) {
  const renderOption = () => {
    return data.map((item, index) => (
      <div
        key={index}
        className="bg-white rounded-lg overflow-hidden px-2 py-1"
      >
        <img src={item.img} className="" alt="" />
      </div>
    ));
  };
  return (
    <div className="">
      <img
        src={advertisementLaptop}
        className="h-[220px] object-cover"
        alt=""
      />
      <div className="grid gap-4 grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 px-24 bg-black py-2">
        {renderOption()}
      </div>

      <div className="px-24 bg-[#222222]">
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-4 lg:gap-16 h-full">
          <a href="#hot-deal">
            <div className="flex items-center my-1 justify-center py-2 rounded-lg cursor-pointer flex-col hover:bg-[#ffd400]">
              <div className="">
                <LocalFireDepartmentIcon
                  style={{
                    padding: "0.5rem",
                    borderRadius: "50px",
                    color: "#fff",
                    fontSize: "4rem",
                    backgroundColor: "#f7b42c",
                    backgroundImage:
                      "linear-gradient(315deg, #f7b42c 0%, #fc575e 74%)",
                  }}
                />
              </div>
              <span className="text-white text-struncate text-center mt-2">
                Deal Sốc
              </span>
            </div>
          </a>
          <a href="#laptop-gamming">
            <div className="flex items-center my-1 justify-center py-2 rounded-lg cursor-pointer flex-col hover:bg-[#ffd400]">
              <SportsEsportsIcon
                style={{
                  padding: "0.5rem",
                  borderRadius: "50px",
                  color: "#fff",
                  fontSize: "4rem",
                  backgroundColor: "#f6d327",
                  backgroundImage:
                    "linear-gradient(315deg, #f6d327 0%, #de4daa 74%)",
                }}
              />
              <span className="text-white text-struncate text-center mt-2">
                Gamming
              </span>
            </div>
          </a>
          <a href="#laptop-macbook" className="">
            <div className="flex items-center my-1 justify-center py-2 rounded-lg cursor-pointer flex-col hover:bg-[#ffd400]">
              <AppleIcon
                style={{
                  padding: "0.5rem",
                  borderRadius: "50px",
                  color: "#fff",
                  fontSize: "4rem",
                  backgroundColor: "#2f4353",
                  backgroundImage:
                    "linear-gradient(315deg, #2f4353 0%, #d2ccc4 74%)",
                }}
              />
              <span className="text-white text-struncate text-center mt-2">
                Macbook
              </span>
            </div>
          </a>

          <a href="#laptop-office">
            <div className="flex items-center my-1 justify-center py-2 rounded-lg cursor-pointer flex-col hover:bg-[#ffd400]">
              <MenuBookIcon
                style={{
                  padding: "0.5rem",
                  borderRadius: "50px",
                  color: "#fff",
                  fontSize: "4rem",
                  backgroundColor: "#08e1ae",
                  backgroundImage:
                    "linear-gradient(315deg, #08e1ae 0%, #98de5b 74%)",
                }}
              />
              <span className="text-white text-struncate text-center mt-2">
                Văn phòng
              </span>
            </div>
          </a>
          <a href="#laptop-code" className="">
            <div className="flex items-center my-1 justify-center py-2 rounded-lg cursor-pointer flex-col hover:bg-[#ffd400]">
              <CodeIcon
                style={{
                  padding: "0.5rem",
                  borderRadius: "50px",
                  color: "#fff",
                  fontSize: "4rem",
                  backgroundColor: "#7f53ac",
                  backgroundImage:
                    "linear-gradient(315deg, #7f53ac 0%, #647dee 74%)",
                }}
              />
              <span className="text-white text-struncate text-center mt-2">
                Code, Đồ họa
              </span>
            </div>
          </a>

          <a href="#laptop-thin" className="">
            <div className="flex items-center my-1 justify-center py-2 rounded-lg cursor-pointer flex-col hover:bg-[#ffd400]">
              <AcUnitIcon
                style={{
                  padding: "0.5rem",
                  borderRadius: "50px",
                  color: "#fff",
                  fontSize: "4rem",
                  backgroundColor: "#eec0c6",
                  backgroundImage:
                    "linear-gradient(315deg, #eec0c6 0%, #7ee8fa 74%)",
                }}
              />
              <span className="text-white text-struncate text-center mt-2">
                Mỏng nhẹ
              </span>
            </div>
          </a>

          <a href="#laptop-luxury">
            <div className="flex items-center my-1 justify-center py-2 rounded-lg cursor-pointer flex-col hover:bg-[#ffd400]">
              <DiamondIcon
                style={{
                  padding: "0.5rem",
                  borderRadius: "50px",
                  color: "#fff",
                  fontSize: "4rem",
                  backgroundColor: "#2a2a72",
                  backgroundImage:
                    "linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)",
                }}
              />
              <span className="text-white text-struncate text-center mt-2">
                Sang trọng
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brand;

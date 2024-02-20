import { memo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.scss";
import cate1 from "./assets/users/images/categories/mangcut.jpg";
import cate2 from "./assets/users/images/categories/hoaquakho.jpg";
import cate3 from "./assets/users/images/categories/raucu.jpg";
import cate4 from "./assets/users/images/categories/thittuoi.jpg";

const HomePage = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const categories = [
    {
      pathImg: cate1,
      name: "Măng cụt",
    },
    {
      pathImg: cate2,
      name: "Hoa quả khô",
    },
    {
      pathImg: cate3,
      name: "Rau củ",
    },
    {
      pathImg: cate4,
      name: "Thịt tươi",
    },
  ];
  return (
    <>
      <div className="container">
        <Carousel responsive={responsive}>
        {
          categories.map((categori, key) => (
            <div className="" key={key}>

            </div>
          ))
        }
        </Carousel>
      </div>
    </>
  );
};

export default memo(HomePage);

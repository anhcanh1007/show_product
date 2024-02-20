import { memo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.scss";
import cate1 from "assets/users/images/categories/mangcut.jpg";
import cate2 from "assets/users/images/categories/hoaquakho.jpg";
import cate3 from "assets/users/images/categories/raucu.jpg";
import cate4 from "assets/users/images/categories/thittuoi.jpg";
import { Tab, Tabs } from "reactjs-tabs";

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

  const featProducts = {
    all: {
      title: "Toàn bộ",
      products: [
        {
          img: cate1,
          name: "Thịt bò nạc",
          price: 200000,
        },
        {
          img: cate1,
          name: "Thịt lợn",
          price: 150000,
        },
      ],
    },
    freshMeat: {
      title: "Thịt tươi",
      products: [
        {
          img: cate1,
          name: "Thịt lợn quay",
          price: 180000,
        },
        {
          img: cate1,
          name: "Thịt ba chỉ",
          price: 250000,
        },
      ],
    },
  };

  const renderFeature
  return (
    <>
      <div className="container">
        <Carousel responsive={responsive}>
          {categories.map((categori, key) => (
            <div className="categories__banner" key={key}>
              <div
                className="categories__banner_img"
                style={{ backgroundImage: `url(${categori.pathImg})` }}
              ></div>
              <div>
                <p>{categori.name}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="container">
        <div className="feature">
          <div className="section-title">
            <h2>Sản phẩm nổi bật</h2>
          </div>
          <div>
            <Tabs backgroundColor="#ccc" borderColor="blue">
              <Tab title="first title">Helloooo This is the first Tab.</Tab>
              <Tab title="second title" active="true">
                This is the second tab!!!
              </Tab>
              <Tab title="third title">
                Also this is the third tab that going to be displayed! ha ha!!
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(HomePage);

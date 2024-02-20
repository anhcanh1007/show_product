import { memo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.scss";
import cate1 from "assets/users/images/categories/mangcut.jpg";
import cate2 from "assets/users/images/categories/hoaquakho.jpg";
import cate3 from "assets/users/images/categories/raucu.jpg";
import cate4 from "assets/users/images/categories/thittuoi.jpg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

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

  const renderFeaturedProducts = (data) => {
    const tabList = [];
    const tabPanels = [];

    Object.keys(data).forEach((key, index) => {
      tabList.push(<Tab key={index}>{data[key].title}</Tab>);
      const tabPanel = [];
      data[key].products.forEach((item, j) => {
        tabPanel.push(
          <div key={j} className="col-lg-3">
            <div className="feature__item">
              <div
                className="feature__item_pic"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <ul>
                  <li>
                    <AiOutlineEye />
                  </li>
                  <li>
                    <AiOutlineShoppingCart />
                  </li>
                </ul>
              </div>
              <div className="feature__item_text">
                <h6>
                  <Link to={""}>{item.name}</Link>
                </h6>
                <p>{formater(item.price)}</p>
              </div>
            </div>
          </div>
        );
      });
      tabPanels.push(tabPanel);
    });

    return (
      <Tabs>
        <TabList>{tabList}</TabList>
        {tabPanels.map((item, key) => (
          <TabPanel key={key}>
            <div className="row">{item}</div>
          </TabPanel>
        ))}
      </Tabs>
    );
  };
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
          {renderFeaturedProducts(featProducts)}
        </div>
      </div>
    </>
  );
};

export default memo(HomePage);

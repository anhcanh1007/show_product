import { memo, useState } from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiFillTwitterSquare,
  AiOutlineMenu,
  AiOutlinePhone,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import "./style.scss";
import { Link } from "react-router-dom";
import { formater } from "utils/formater";
import { ROUTERS } from "utils/router";

const Header = () => {
  const [isShowCategory, setIsShowCategory] = useState(true);
  const [menus] = useState([
    {
      name: "Trang chủ",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "Cửa hàng",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "Sản phẩm",
      path: "",
      isShowSubmenu: false,
      child: [
        {
          name: "Thịt",
          path: "",
        },
        {
          name: "Rau củ",
          path: "",
        },
        {
          name: "Thức ăn nhanh",
          path: "",
        },
      ],
    },
    {
      name: "Bài viết",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "Liên hệ",
      path: ROUTERS.USER.HOME,
    },
  ]);
  return (
    <>
      <div className="header__top">
        <div className="container">
          <div className="row">
            <div className="col-6 header__top_left">
              <ul>
                <li>
                  <AiFillMail />
                  <span>hello@gmail.com</span>
                </li>
                <li>Miễn phí ship lên đến {formater(200000)}</li>
              </ul>
            </div>
            <div className="col-6 header__top_right">
              <ul>
                <li>
                  <Link to={""}>
                    <AiFillFacebook />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <AiFillInstagram />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <AiFillLinkedin />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <AiFillTwitterSquare />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <AiOutlineUser />
                  </Link>
                  <span>Đăng nhập</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <div className="header__logo">
              <h1>AnhCanh SHOP</h1>
            </div>
          </div>
          <div className="col-xl-6">
            <nav className="header__menu">
              <ul>
                {menus?.map((menu, menuKey) => (
                  <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                    <Link to={menu.path}>{menu.name}</Link>
                    {menu.child && (
                      <ul className="header__menu_dropdown">
                        {menu.child.map((childItem, childKey) => (
                          <li key={`${menuKey}-${childKey}`}>
                            <Link to={childItem.path}>{childItem.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-xl-3">
            <div className="header__cart">
              <div className="header__cart_price">
                <span>{formater(1023123)}</span>
              </div>
              <ul>
                <li>
                  <Link to="#">
                    <AiOutlineShoppingCart /> <span>4</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row hero__categories_container">
          <div className="col-lg-3 hero__categories">
            <div
              className="hero__categories_all"
              onClick={() => setIsShowCategory(!isShowCategory)}
            >
              <AiOutlineMenu /> <span>Danh sách sản phẩm</span>
            </div>
            {isShowCategory && (
              <ul className={isShowCategory ? "" : "hidden"}>
                <li>
                  <Link to="">Thịt tươi</Link>
                </li>
                <li>
                  <Link to="">Rau củ</Link>
                </li>
                <li>
                  <Link to="">Nước trái cây</Link>
                </li>
                <li>
                  <Link to="">Trái cây</Link>
                </li>
                <li>
                  <Link to="">Hải sản</Link>
                </li>
              </ul>
            )}
          </div>
          <div className="col-lg-9 header__search_container">
            <div className="hero__search">
              <div className="hero__search_form">
                <form>
                  <input type="text" placeholder="Bạn đang tìm gì?" />
                  <button>Tìm kiếm</button>
                </form>
              </div>
              <div className="hero__search_phone">
                <div className="hero__search_phone_icon">
                  <AiOutlinePhone />
                </div>
                <div className="hero__search_phone_text">
                  <p>0379.047.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);

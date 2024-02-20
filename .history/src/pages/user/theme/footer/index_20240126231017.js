import { memo } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer__about">
                <h1 className="footer__about_logo">AnhCanh Shop</h1>
                <ul>
                  <li>Địa chỉ: Thôn 3, Ân Phú</li>
                  <li>SĐT: 0379047767</li>
                  <li>Email: anhcanh1007@gmail.com</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer__widget">
                <h4>Cửa hàng</h4>
                <ul>
                  <li>
                    <Link to="">Liên hệ</Link>
                  </li>
                  <li>
                    <Link to="">Thông tin về chúng tôi</Link>
                  </li>
                  <li>
                    <Link to="">Sản phẩm kinh doanh</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link to="">Thông tin tài khoản</Link>
                  </li>
                  <li>
                    <Link to="">Cửa hàng</Link>
                  </li>
                  <li>
                    <Link to="">Danh sách ưu thích</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer__widget">
                <h4>Khuyến mãi & Ưu đãi</h4>
                <p>Đăng kí nhận thông tin tại đây</p>
                <form action="#">
                  <div>
                    <input type="text" placeholder="Nhập Email" />
                    <button type="submit" className="submit-button">
                      Đăng kí
                    </button>
                  </div>
                  <div>
                    <div>
                      <AiOutlineFacebook />
                    </div>
                    <div>
                      <AiOutlineInstagram />
                    </div>
                    <div>
                      <AiOutlineLinkedin />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default memo(Footer);

import { memo } from "react";
import "./style.scss";

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
            <div className="col-lg-6">2</div>
            <div className="col-lg-3">3</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default memo(Footer);

import { memo } from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 .footer">
              <h1>AnhCanh Shop</h1>
              <ul>
                <li>Địa chỉ: Thôn 3, Ân Phú</li>
                <li>SĐT: 0379047767</li>
                <li>Gmail: anhcanh1007@gmail.com</li>
              </ul>
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

import { memo } from "react";
import "./style.scss";

const Header = () => {
  return (
    <>
      <div className="header__top">
        <div className="container">
          <div className="row">
            <div className="col-6">trai</div>
            <div className="col-6">phai</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);

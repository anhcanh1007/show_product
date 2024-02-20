import { memo } from "react";
import "./style.scss";

const Header = () => {
  return (
    <>
      <div className="header__top">
        <div className="container">
          Header
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);

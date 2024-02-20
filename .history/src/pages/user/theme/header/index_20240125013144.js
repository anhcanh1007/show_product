import { memo } from "react";
import moduleName from 'module'
const Header = () => {
  return (
    <>
      <div className="header__top">
        <div className="container">Header</div>
      </div>
    </>
  );
};

export default memo(Header);

import { memo } from "react";
import { AiFillFacebook } from "react-icons/ai";
import "./style.scss";

const Header = () => {
  return (
    <>
      <div className="header__top">
        <div className="container">
          <div className="row">
            <div className="col-6">trai</div>
            <div className="col-6 header__top_right">
              <ul>
                <li>
                  <AiFillFacebook />
                </li>
                <li>canh</li>
                <li>dep</li>
                <li>trai</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);

import { memo } from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import "./style.scss";
import { Link } from "react-router-dom";

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
                <Link to={""} >
                  
                </Link>
                  <AiFillFacebook />
                </li>
                <li>
                  <AiFillInstagram />
                </li>
                <li>
                  <AiFillLinkedin />
                </li>
                <li>
                  <AiFillTwitterSquare />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);

import { memo } from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">1</div>
            <div className="col-lg-6">2</div>
            <div className="col-lg-3">3</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default memo(Footer);

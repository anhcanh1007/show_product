import { memo } from "react";
import Header from "../header";
import Footer from "../footer";

const MasterLayout = ({children, ...props}) => {
  return (
    <div>
      <Header />
      <h1>Body</h1>
      <Footer />
    </div>
  );
};

export default memo(MasterLayout);

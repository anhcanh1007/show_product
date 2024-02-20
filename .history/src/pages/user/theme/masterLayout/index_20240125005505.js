import { memo } from "react";
import Header from "../header";
import Footer from "../footer";

const MasterLayout = ({children}) => {
  return (
    <>
      <Header />
      <h1>Body</h1>
      <Footer />
    </>
  );
};

export default memo(MasterLayout);

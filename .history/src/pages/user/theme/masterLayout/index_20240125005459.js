import { memo } from "react";
import Header from "../header";
import Footer from "../footer";

const MasterLayout = ({chilre}) => {
  return (
    <>
      <Header />
      <h1>Body</h1>
      <Footer />
    </>
  );
};

export default memo(MasterLayout);

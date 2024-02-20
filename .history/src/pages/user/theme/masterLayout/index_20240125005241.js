import { memo } from "react";
import Header from "../header";

const MasterLayout = () => {
  return (
    <>
      <Header />
      <h1>Body</h1>
    </>
  );
};

export default memo(MasterLayout);

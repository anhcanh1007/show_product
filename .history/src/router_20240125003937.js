import { ROUTERS } from "./utils/router";

const renderUserRouter = () => {
  const userRouters = [
    {
      path: ROUTERS.USER.HOME,
      component: <HomePagee>
    },
  ];
};

const RouterCustom = () => {
  return renderUserRouter();
};

export default RouterCustom;

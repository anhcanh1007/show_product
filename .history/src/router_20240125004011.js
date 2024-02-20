import { ROUTERS } from "./utils/router";
import HomePage from "./pa"

const renderUserRouter = () => {
  const userRouters = [
    {
      path: ROUTERS.USER.HOME,
      component: <HomePage />
    },
  ];
};

const RouterCustom = () => {
  return renderUserRouter();
};

export default RouterCustom;

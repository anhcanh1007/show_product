import { ROUTERS } from "./utils/router";
import HomePage from "./pages/user/homePage";

const renderUserRouter = () => {
  const userRouters = [
    {
      path: ROUTERS.USER.HOME,
      component: <HomePage />,
    },
  ];

  return (
    <Routes></Routes>
  )
};

const RouterCustom = () => {
  return renderUserRouter();
};

export default RouterCustom;

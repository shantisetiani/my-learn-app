import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClassList from "pages/ClassList";
import ClassDetail from "pages/ClassDetail";

const SITE_URL = process.env.PUBLIC_URL;

export const ROUTES = {
  CLASS_LIST: `${SITE_URL}/`,
  CLASS_DETAIL: `${SITE_URL}/class-detail`,
};

export const ROUTE_CONFIG = [
  {
    path: ROUTES.CLASS_LIST,
    key: "classList",
    element: <ClassList />,
  },
  {
    path: ROUTES.CLASS_DETAIL + "/:id",
    key: "classDetail",
    element: <ClassDetail />,
  },
];

interface RouteConfig {
  path: string;
  key: string;
  element: JSX.Element;
}

export const RenderRouter = () => (
  <Routes>
    {ROUTE_CONFIG.map((route: RouteConfig) => {
      return <Route {...route} />;
    })}
    <Route
      element={() => <h1 className="text-center py-44">Page Not Found!</h1>}
    />
  </Routes>
);

export default RenderRouter;

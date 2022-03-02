import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClassList from "pages/ClassList";
import ClassDetail from "pages/ClassDetail";

const SITE_URL = process.env.PUBLIC_URL;

export const ROUTE_CONFIG = [
  {
    path: `${SITE_URL}/`,
    key: "classList",
    element: <ClassList />,
  },
  {
    path: `${SITE_URL}/class-detail/:id`,
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
  <BrowserRouter>
    <Routes>
      {ROUTE_CONFIG.map((route: RouteConfig) => {
        return <Route {...route} />;
      })}
      <Route
        element={() => <h1 className="text-center py-44">Page Not Found!</h1>}
      />
    </Routes>
  </BrowserRouter>
);

export default RenderRouter;

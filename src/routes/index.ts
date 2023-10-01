import React from "react";
import DefaultLayout from "../layouts/defaulLayout/DefaulLayout";
import HeaderOnly from "src/layouts/headerOnly/HeaderOnly";
import Home from "../pages/home/Home";
import Test from "../pages/Test";
import Blog from "../pages/blog";
import Register from "src/pages/register/Register";
import Login from "src/pages/login/Login";

interface Route {
  path: string;
  component: React.ComponentType<any> | null;
  layout: React.ComponentType<any> | null;
}

const publicRoutes: Route[] = [
  { path: "/", component: Home, layout: DefaultLayout },
  { path: "/test", component: Test, layout: null },
  { path: "/blog", component: Blog, layout: null },
  { path: "/register", component: Register, layout: DefaultLayout },
  { path: "/login", component: Login, layout: HeaderOnly },

  { path: "*", component: null, layout: null },
];

const privateRoutes: Route[] = [{ path: "*", component: null, layout: null }];

export { publicRoutes, privateRoutes };

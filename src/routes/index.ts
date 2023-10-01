import React from "react";
import DefaultLayout from "../layouts/defaulLayout/DefaulLayout";
import Home from "../pages/Home";
import Test from "../pages/Test";
import Blog from "../pages/blog";

interface Route {
  path: string;
  component: React.ComponentType<any> | null;
  layout: React.ComponentType<any> | null;
}

const publicRoutes: Route[] = [
  { path: "/", component: Home, layout: DefaultLayout },
  { path: "/test", component: Test, layout: null },
  { path: "/login", component: Home, layout: null },
  { path: "/blog", component: Blog, layout: null },

  { path: "*", component: null, layout: null },
];

const privateRoutes: Route[] = [{ path: "*", component: null, layout: null }];

export { publicRoutes, privateRoutes };

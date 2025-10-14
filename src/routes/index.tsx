import type { JSX } from "react";
import { PAGES } from "../utils/constants";
import { Route, Routes } from "react-router-dom";
import GeneralLayout from "../components/layout/General";
import HomePage from "../pages/Home";
import BlogPage from "../pages/Blog";
import ProductPage from "../pages/Product";
import ContactPage from "../pages/Contact";
import BlogDetailPage from "../pages/BlogDetail";
import ProductDetailPage from "../pages/ProductDetail";

const UserRoutes = () => {
  const routesConfig =
  {
    general: [
      { path: PAGES.HOME, element: <HomePage /> },
      { path: PAGES.CONTACT, element: <ContactPage /> },
      { path: PAGES.BLOG, element: <BlogPage /> },
      { path: PAGES.BLOG_DETAIL, element: <BlogDetailPage /> },
      { path: PAGES.PRODUCT, element: <ProductPage /> },
      { path: PAGES.PRODUCT_DETAIL, element: <ProductDetailPage /> }
    ]
  }
  const renderRoutesWithLayout = (
    routes: { path: string; element: React.ReactNode }[],
    Layout: (props: { children: React.ReactNode }) => JSX.Element
  ) => {
    return (
      routes.map(({ path, element }) => (
        <Route key={path} path={path} element={<Layout>{element}</Layout>} />
      ))
    );
  }
  return <>
    <Routes>
      {renderRoutesWithLayout(routesConfig.general, GeneralLayout)}
    </Routes></>;
};
export default UserRoutes;

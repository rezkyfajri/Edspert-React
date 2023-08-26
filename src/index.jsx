import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./component/Layout";
import ProductCatalogPage from "./assets/page/ProductCatalog/ProductCatalog";
import ProductDetailPage from "./assets/page/ProductDetail/ProductDetail";
import PaymentCheckoutPage from "./assets/page/PaymentCheckout/PaymentCheckout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ProductCatalogPage />,
      },
      {
        path: "ProductDetail/:id",
        element: <ProductDetailPage />,
      },
      {
        path: "PaymentCheckout",
        element: <PaymentCheckoutPage />,
      },
    ],
  },
]);
const Rout = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Rout;

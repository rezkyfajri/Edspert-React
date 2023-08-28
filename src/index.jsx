import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./component/Layout";
import PaymentInstructionCheckoutPage from "./assets/page/PaymentInstructionCheckout/PaymentInstructionCheckout";
import ProductCatalogPage from "./assets/page/ProductCatalog/ProductCatalog";
import ProductDetailPage from "./assets/page/ProductDetail/ProductDetail";
import PaymentCheckoutPage from "./assets/page/PaymentCheckout/PaymentCheckout";
import { Provider } from "react-redux";
import store from "./store";
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
      {
        path: "PaymentInstructionCheckout",
        element: <PaymentInstructionCheckoutPage />,
      },
    ],
  },
]);
const Rout = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default Rout;

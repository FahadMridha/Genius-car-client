import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/main/Main";
import Checkout from "../../pages/checkOut/Checkout";
import Home from "../../pages/home/home/Home";
import Login from "../../pages/login/Login";
import Order from "../../pages/orders/Order";
import Signup from "../../pages/signup/Signup";
import PrivateRoute from "./private/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/orders",
        element: <Order />,
      },
    ],
  },
]);
export default router;

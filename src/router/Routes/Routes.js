import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/main/Main";
import Home from "../../pages/home/home/Home";
import Login from "../../pages/login/Login";
import Signup from "../../pages/signup/Signup";

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
    ],
  },
]);
export default router;

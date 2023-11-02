import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../main-lay-out/MainLayOut";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";
import CheckOut from "../pages/Home/checkout/CheckOut";
// import SignUp from "../pages/signup/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
            path:'login',
            element:<Login></Login>,
        },
        {
            path:'signup',
            element:<SignUp></SignUp>,
        },
        {
            path:'checkout/:id',
            element:<CheckOut></CheckOut>,
            loader:({params})=>fetch(`http://localhost:5000/service/${params.id}`)
        }
      ]
    }
  ]);

  export default router;
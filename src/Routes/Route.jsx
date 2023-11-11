import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Home from "../components/Home/Home/Home";
import MainLayOut from "../MainLayout/MainLayOut";
import Menu from "../components/Menu/Menu/Menu";
import Order from "../components/Order/Order/Order";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/menu',
          element:<Menu></Menu>
        },
        {
          path:'/order',
          element:<Order></Order>
        }
      ]
    },
  ]);
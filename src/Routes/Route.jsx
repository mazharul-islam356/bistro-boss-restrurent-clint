import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayOut from "../assets/MainLayout/MainLayOut";
import Home from "../components/Home/Home/Home";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
      ]
    },
  ]);
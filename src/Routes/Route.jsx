import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Home from "../components/Home/Home/Home";
import MainLayOut from "../MainLayout/MainLayOut";

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
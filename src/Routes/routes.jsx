import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Buyer from "../Pages/Buyer/Buyer";
import SearchResult from "../Pages/BuyerSearchResult/SearchResult";
import Seller from "../Pages/Seller/Seller";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children : [
        {
            path : '/',
            element: <Home></Home>
        },
        {
          path : 'buyer',
          element : <Buyer></Buyer>
        },
        {
          path : 'searchResults',
          element : <SearchResult></SearchResult>
        },
        {
          path: 'seller',
          element : <Seller></Seller>
        }
      ]
    },
  ]);
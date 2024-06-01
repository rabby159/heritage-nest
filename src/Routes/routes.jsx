/* eslint-disable react/react-in-jsx-scope */
import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Buyer from "../Pages/Buyer/Buyer";
import SearchResult from "../Pages/BuyerSearchResult/SearchResult";
import Seller from "../Pages/Seller/Seller";
import PropertyDetails from "../Pages/BuyerSearchResult/PropertyDetails/PropertyDetails";
import SignIn from "../Pages/SignIn/SignIn";
import PrivateRoute from "./PrivateRoute";
import ManageRoute from "../Pages/ManageRoute/ManageRoute";

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
          path : '/property/:id',
          element : <PropertyDetails></PropertyDetails>
        },
        {
          path: 'seller',
          element : <PrivateRoute><Seller></Seller></PrivateRoute>
        },
        {
          path: 'signIn',
          element : <SignIn></SignIn>
        },
        {
          path: 'manageRoute',
          element: <PrivateRoute><ManageRoute></ManageRoute></PrivateRoute>
        }
      ]
    },
  ]);
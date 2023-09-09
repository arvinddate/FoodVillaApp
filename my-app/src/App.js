import React, { useState } from 'react';
import { createBrowserRouter, Route, BrowserRouter, Routes, Outlet } from "react-router-dom";
import Body from "./components/Body/body";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import About from "./components/About/about";
import Error from "./components/Error/error";
import Contact from "./components/Contact/contact";
import Cart from "./components/Cart/cart";
import RestaurantMenu from "./components/RestaurantMenu/restaurantMenu";
import Profile from "./components/Profile/profile";
import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import store from './Utils/store';
const Instamart =lazy(()=>import ("./components/Instamart/instamart"))
function Home() {
  const [user , setUser]=useState({
    name: "Arvind Date",
    email:"arvinddate@gmail.com",
  });

  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
}


const App = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: <Instamart />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);



export default App;


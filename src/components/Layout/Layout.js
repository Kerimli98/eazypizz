import React from "react";
import Routes from "../../routes/Routers";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Carts from "../UI/Carts";
import { useSelector } from "react-redux/es/exports";
const Layout = () => {
  const showCart = useSelector((state) => state.cartUI.cartIsVisible);
  return (
    <div>
      <Header />
      {showCart && <Carts />}
      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

import React from "react";
import Routes from "../../routes/Routers";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Carts from "../UI/Carts";
import { useSelector } from "react-redux/es/exports";
import ScrollToTop from "../ScrollToTop";
const Layout = () => {
  const showCart = useSelector((state) => state.cartUI.cartIsVisible);
  return (
    <div>
      <ScrollToTop />
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

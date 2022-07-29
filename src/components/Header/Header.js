import React, { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { cartUiActions } from "../../store/cartUISlice";

import "../../styles/header.css";

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const changeNavBg = () => {
    if (window.scrollY >= 20) setNavbar(true);
    else setNavbar(false);
  };
  window.addEventListener("scroll", changeNavBg);

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };
  let location = useLocation();

  return (
    <header
      className={navbar ? "header header-fixed" : "header"}
    >
      <Container className="nav-container">
        <div className=" nav__wrapper d-flex align-items-center justify-content-between">
          <NavLink to="/home" className="logo">
            <img src={logo} alt="logo" />
            <h5
              className={
                location.pathname.includes("cart") |
                  location.pathname.includes("foods") |
                  location.pathname.includes("login") |
                  location.pathname.includes("checkout") && !navbar
                  ? "text-white"
                  : "header-fixed"
              }
            >
              EazyPizz
            </h5>
          </NavLink>

          {/* ======= menu ======= */}
          <div className={"navigation " + (menu && "active ")}>
            <div className="menu d-flex align-items-center gap-5">
              {nav__links.map((item, index) => (
                <NavLink
                  onClick={() => setMenu(false)}
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive
                      ? "active__menu"
                      : location.pathname.includes("cart") |
                          location.pathname.includes("foods") |
                          location.pathname.includes("login") |
                          location.pathname.includes("checkout") && !menu
                      ? "text-white"
                      : "header-fixed"
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/* ======== nav right icons ========= */}
          <div className="nav__right d-flex align-items-center gap-4">
            <span
              className={
                location.pathname.includes("cart") |
                  location.pathname.includes("foods") |
                  location.pathname.includes("login") |
                  location.pathname.includes("checkout") && !navbar
                  ? "text-white cart__icon"
                  : "cart__icon"
              }
              onClick={toggleCart}
            >
              <i className="ri-shopping-basket-line"></i>
              <span className="cart__badge">{totalQuantity}</span>
            </span>

            <span
              className={
                location.pathname.includes("cart") |
                  location.pathname.includes("foods") |
                  location.pathname.includes("login") |
                  location.pathname.includes("checkout") && !navbar
                  ? "text-white user"
                  : "user"
              }
            >
              <Link to="/login">
                <i className="ri-user-line"></i>
              </Link>
            </span>

            <div
              onClick={() => setMenu(!menu)}
              className={"menu-btn " + (menu && "open")}
            >
              <div
                className={
                  location.pathname.includes("cart") |
                    location.pathname.includes("foods") |
                    location.pathname.includes("login") |
                    location.pathname.includes("checkout") &&
                  !navbar &&
                  !menu
                    ? "menu-btn__burger bg-white"
                    : "menu-btn__burger"
                }
              ></div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;

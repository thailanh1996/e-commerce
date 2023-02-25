import React, { useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Container, Row } from "reactstrap";
import { motion } from "framer-motion";

import "../Header/header.scss";
import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";
import { useSelector } from "react-redux";
import useAuth from "../../custom-hook/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";

const nav_link = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

function Header(props) {
  const headerRef = useRef();
  const menuRef = useRef();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const navigate = useNavigate();
  const profileActionsRef = useRef();
  const { currentUser } = useAuth();

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", (e) => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged out");
        navigate("/home");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");
  const navigateToCart = () => {
    navigate("/cart");
  };

  const navigateToHomePage = () => {
    navigate("/");
  };

  const toggleprofileActions = () => {
    profileActionsRef.current.classList.toggle("show__profileActions");
    console.log("abc", profileActionsRef.current);
  };

  return (
    <header ref={headerRef} className="header">
      <Container>
        <Row>
          <div className="nav_wrapper">
            <div className="logo" onClick={navigateToHomePage}>
              <img src={logo} alt="" />
              <div>
                <h1>Multimart</h1>
                {/* <p>Since 1995</p> */}
              </div>
            </div>

            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {nav_link.map((item, index) => (
                  <li key={index} className="nav__item">
                    <NavLink
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                      to={item.path}
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__icons">
              <span className="fav__icon">
                <i className="ri-heart-line"></i>
                <span className="badge">2</span>
              </span>

              <span className="cart__icon" onClick={navigateToCart}>
                <i className="ri-shopping-bag-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>

              <div className="profile">
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={currentUser ? currentUser.photoURL : userIcon}
                  alt=""
                  onClick={toggleprofileActions}
                />

                <div ref={profileActionsRef} className="profile__actions">
                  {currentUser ? (
                    <span onClick={logout}>Logout</span>
                  ) : (
                    <div className="d-flex align-items-center justify-content-center flex-column">
                      <Link to="/signup">Signup</Link>
                      <Link to="/login">Login</Link>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="mobile__menu">
              <span onClick={menuToggle}>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
}

export default Header;

import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Container, Row } from "reactstrap";
import { motion } from "framer-motion";

import "../Header/header.scss";
import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";

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

  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header ref={headerRef} className="header">
      <Container>
        <Row>
          <div className="nav_wrapper">
            <div className="logo">
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
                <span className="badge">1</span>
              </span>

              <span className="cart__icon">
                <i className="ri-shopping-bag-line"></i>
                <span className="badge">1</span>
              </span>

              <span className="avatar__icon">
                <motion.img whileTap={{ scale: 1.5 }} src={userIcon} alt="" />
              </span>
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

import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row } from "reactstrap";
import useAuth from "../custom-hook/useAuth";
import "../style/admin-nav.scss";

const admin_nav = [
  {
    display: "Dashboard",
    path: "/dashboard",
  },
  {
    display: "All-products",
    path: "dashboard/all-products",
  },
  {
    display: "Orders",
    path: "/dashboard/orders",
  },
  {
    display: "Users",
    path: "/dashboard/users",
  },
];

function AdminNav(props) {
  const { currentUser } = useAuth();

  // console.log(currentUser);
  return (
    <>
      <header className="admin__header">
        <div className="admin__nav-top">
          <Container>
            <Row>
              <div className="admin__nav-wrapper-top">
                <div className="logo">
                  <h2>Multimart</h2>
                </div>

                <div className="search__box">
                  <input type="text" placeholder="Search..." />
                  <span>
                    <i className="ri-search-line"></i>
                  </span>
                </div>

                <div className="admin__nav-top-right">
                  <span>
                    <i className="ri-notification-3-line"></i>
                  </span>
                  <span>
                    <i className="ri-settings-4-fill"></i>
                  </span>
                  <img src={currentUser && currentUser.photoURL} alt="" />
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </header>

      <section className="admin__menu">
        <Container>
          <Row>
            <div className="admin__navigation">
              <ul className="admin__menu-list">
                {admin_nav.map((item, index) => (
                  <li className="admin__menu-item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active__admin-menu" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default AdminNav;

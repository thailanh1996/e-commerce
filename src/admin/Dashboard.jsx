import React from "react";
import { Col, Container, Row } from "reactstrap";
import "../style/dashboard.scss";
import useGetData from "../custom-hook/useGetData";

//
function Dashboard(props) {
  const { data: products } = useGetData("products");
  const { data: users } = useGetData("users");

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <div className="revenue__box">
                <h5>Total Sales</h5>
                <span>$896</span>
              </div>
            </Col>
            <Col lg="3">
              <div className="order__box">
                <h5>Orders</h5>
                <span>$346</span>
              </div>
            </Col>
            <Col lg="3">
              <div className="products__box">
                <h5>Total Products</h5>
                <span>{products.length}</span>
              </div>
            </Col>
            <Col lg="3">
              <div className="users__box">
                <h5>Total Users</h5>
                <span>{users.length}</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Dashboard;

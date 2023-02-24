import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import "../style/cart.scss";
import tdImg from "../assets/images/arm-chair-01.jpg";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

function Cart(props) {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const { image, price, productName, quantity, totalPrice } = cartItems;

  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart"></CommonSection>
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h2>No item added to the cart</h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        <img src={image} alt="" />
                      </td>

                      <td>Mordern Arm Chair</td>
                      <td>$299</td>
                      <td>2</td>
                      <td>
                        <span>
                          <i className="ri-delete-bin-line"></i>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}
export default Cart;

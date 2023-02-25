import React from "react";
import { Container, Row, Col, FormGroup, Form } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../style/checkout.scss";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

function Checkout(props) {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Checkout">
      <Container>
        <CommonSection title="Checkout"></CommonSection>
        <section>
          <Container>
            <Row>
              <Col lg="8">
                <h6 className="fs-4 mb-4 fw-bold">Billing Infomation</h6>
                <Form className="billing__form">
                  <FormGroup className="form__group">
                    <input type="text" placeholder="Enter your name" />
                  </FormGroup>

                  <FormGroup className="form__group">
                    <input type="email" placeholder="Enter your email" />
                  </FormGroup>

                  <FormGroup className="form__group">
                    <input type="number" placeholder="Phone number" />
                  </FormGroup>

                  <FormGroup className="form__group">
                    <input type="text" placeholder="City" />
                  </FormGroup>

                  <FormGroup className="form__group">
                    <input type="text" placeholder="Postal code" />
                  </FormGroup>

                  <FormGroup className="form__group">
                    <input type="text" placeholder="Country" />
                  </FormGroup>
                </Form>
              </Col>
              <Col lg="4">
                <div className="checkout__cart">
                  <h6>
                    Total Qty:{" "}
                    <span>
                      {totalQty} {totalQty === 1 ? "item" : "items"}
                    </span>
                  </h6>
                  <h6>
                    Subtotal: <span>${totalAmount}</span>
                  </h6>
                  <h6>
                    <span>
                      Shipping: <br />
                      Free shipping
                    </span>
                    <span>$0</span>
                  </h6>
                  <h4>
                    Total cost <span>${totalAmount}</span>
                  </h4>

                  <motion.button
                    whileTap={{ scale: 1.1 }}
                    className="buy__btn auth__btn w-100"
                  >
                    Place an order
                  </motion.button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Container>
    </Helmet>
  );
}

export default Checkout;

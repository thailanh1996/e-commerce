import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { cartActions } from "../redux/slices/cartSlice";
import "../style/cart.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Cart(props) {
  const cartItems = useSelector((state) => state.cart.cartItems);

  console.log(cartItems);

  const { image, price, productName, quantity, totalPrice } = cartItems;
  const totalAmount = useSelector((state) => state.cart.totalAmount);

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
                    {cartItems.map((item, index) => (
                      <Tr key={index} item={item} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>

            <Col lg="3">
              <div>
                <h6 className="d-flex align-items-center justify-content-between">
                  Subtotal
                  <span className="fs-4 fw-bold">${totalAmount}</span>
                </h6>
              </div>
              <p className="fs-6 mt-2">
                Taxes ad shipping will caculate in checkout
              </p>
              <div>
                <button className="buy__btn w-100">
                  <Link to="/shop">Continute Shopping</Link>
                </button>

                <button className="buy__btn mt-3 w-100">
                  <Link to="/checkout">Checkout</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

const Tr = ({ item }) => {
  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));

    console.log(item.id);
  };

  return (
    <tr>
      <td>
        <img src={item.image} alt="" />
      </td>

      <td>{item.productName}</td>
      <td>${item.price}</td>
      <td>{item.quantity}</td>
      <td>
        <span>
          <motion.i
            whileTap={{ scale: 1.2 }}
            className="ri-delete-bin-line"
            onClick={deleteProduct}
          ></motion.i>
        </span>
      </td>
    </tr>
  );
};

export default Cart;

import React, { useRef, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import products from "../assets/data/products";
import "../style/product-details.scss";
import { motion } from "framer-motion";
import ProductList from "../components/UI/ProductList";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";

function ProductDetails(props) {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const [tab, setTab] = useState("desc");
  const [rating, setRating] = useState(null);
  const reviewUser = useRef("");
  const reviewMsg = useRef("");
  const dispatch = useDispatch();

  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
    category,
  } = product;

  const relatedProducts = products.filter((item) => item.category === category);

  const submitHandler = (e) => {
    e.preventDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;
  };

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        image: imgUrl,
        productName,
        price,
      })
    );

    toast.success("Product added successfully!");
  };

  return (
    <div>
      <Helmet title="Product Details">
        <CommonSection />
        <section>
          <Container>
            <Row>
              <Col lg="6">
                <img style={{ width: "70%" }} src={imgUrl} alt="" />
              </Col>
              <Col lg="6">
                <div className="product__details">
                  <h2>{productName}</h2>

                  {/* ----rating------ */}
                  <div className="product__rating d-flex align-items-center gap-5">
                    <div>
                      <span>
                        <i className="ri-star-fill"></i>
                      </span>
                      <span>
                        <i className="ri-star-fill"></i>
                      </span>
                      <span>
                        <i className="ri-star-fill"></i>
                      </span>
                      <span>
                        <i className="ri-star-fill"></i>
                      </span>
                      <span>
                        <i className="ri-star-half-fill"></i>
                      </span>
                    </div>
                    <p>
                      (<span>{avgRating}</span> ratings)
                    </p>
                  </div>

                  <span className="product__price">${price}</span>
                  <p className="mt-3">{shortDesc}</p>

                  <motion.button
                    onClick={addToCart}
                    className="buy__btn"
                    whileTap={{ scale: 1.2 }}
                  >
                    Add To Cart
                  </motion.button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <Row>
              <Col lg="12">
                <div className="tab__wrapper d-flex align-items-center gap-5">
                  <h6
                    className={`${tab === "desc" ? "active__tab" : ""}`}
                    onClick={() => setTab("desc")}
                  >
                    Description
                  </h6>
                  <h6
                    className={`${tab === "rev" ? "active__tab" : ""}`}
                    onClick={() => setTab("rev")}
                  >
                    Review ({reviews.length})
                  </h6>
                </div>

                {tab === "desc" ? (
                  <div className="tab__content mt-4">
                    <p>{description}</p>
                  </div>
                ) : (
                  <div className="product__review mt-4">
                    <div className="review__wrapper">
                      <ul>
                        {reviews.map((item, index) => (
                          <li key={index} className="mb-4">
                            <h6>John Doe</h6>
                            <span>{item.rating} (rating)</span>
                            <p>{item.text}</p>
                          </li>
                        ))}
                      </ul>

                      <div className="review__form">
                        <h4>Leave your experience</h4>
                        <form action="" onSubmit={submitHandler}>
                          <div className="form__group">
                            <input
                              type="text"
                              placeholder="Enter name"
                              ref={reviewUser}
                            />
                          </div>

                          <div className="form__group d-flex align-items-center gap-5">
                            <motion.span
                              onClick={() => setRating(1)}
                              whileTap={{ scale: 1.1 }}
                            >
                              1<i className="ri-star-fill"></i>
                            </motion.span>
                            <motion.span
                              onClick={() => setRating(2)}
                              whileTap={{ scale: 1.1 }}
                            >
                              2<i className="ri-star-fill"></i>
                            </motion.span>
                            <motion.span
                              onClick={() => setRating(3)}
                              whileTap={{ scale: 1.1 }}
                            >
                              3<i className="ri-star-fill"></i>
                            </motion.span>
                            <motion.span
                              onClick={() => setRating(4)}
                              whileTap={{ scale: 1.1 }}
                            >
                              4<i className="ri-star-fill"></i>
                            </motion.span>
                            <motion.span
                              onClick={() => setRating(5)}
                              whileTap={{ scale: 1.1 }}
                            >
                              5<i className="ri-star-half-fill"></i>
                            </motion.span>
                          </div>

                          <div className="form__group">
                            <textarea
                              ref={reviewMsg}
                              row={4}
                              type="text"
                              placeholder="Review message"
                            />
                          </div>

                          <motion.button
                            className="buy__btn mt-0"
                            whileTap={{ scale: 1.2 }}
                          >
                            Submit
                          </motion.button>
                        </form>
                      </div>
                    </div>
                  </div>
                )}
              </Col>

              {/* --related product */}
              <Col lg="12" className="mt-5">
                <h2 className="related__product">You might also like</h2>
              </Col>
              <ProductList data={relatedProducts} />
            </Row>
          </Container>
        </section>
      </Helmet>
    </div>
  );
}

export default ProductDetails;

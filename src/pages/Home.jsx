import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import "../style/home.scss";

import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import counterImg from "../assets/images/counter-timer-img.png";

import Services from "../Services/Services";
import ProductList from "../components/UI/ProductList";
import products from "../assets/data/products";
import Clock from "../components/UI/Clock";

//
function Home(props) {
  const [treadingProducts, setTrendingProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filterTredingProducts = products.filter(
      (item) => item.category === "chair"
    );

    const filterBestProducts = products.filter(
      (item) => item.category === "sofa"
    );

    const filterMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );

    const filterWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );

    const filterPopularProducts = products.filter(
      (item) => item.category === "watch"
    );

    // Set
    setTrendingProducts(filterTredingProducts);
    setBestProducts(filterBestProducts);
    setMobileProducts(filterMobileProducts);
    setWirelessProducts(filterWirelessProducts);
    setPopularProducts(filterPopularProducts);
  }, []);

  return (
    <Helmet title={"Home"}>
      {/* ------Hero--------- */}
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Treding product in {year}</p>
                <h2>Make Your Interior Mor Minimalistic & Modern</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eaque harum repellat reiciendis animi aspernatur accusantium
                  ipsum dolor dignissimos nesciunt necessitatibus?
                </p>
                <motion.button className="buy__btn" whileTap={{ scale: 1.2 }}>
                  <Link to="/shop">Shop now</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* -------Services------ */}
      <Services />
      {/* ------- Treding product---------*/}
      <section className="treading__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Treding Products</h2>
            </Col>
            <ProductList data={treadingProducts} />
          </Row>
        </Container>
      </section>
      {/* ------- Best sales---------*/}
      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Best Sales</h2>
            </Col>
            <ProductList data={bestProducts} />
          </Row>
        </Container>
      </section>

      {/* ------- Time count---------*/}
      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count__down-col">
              <div className="clock__top-content">
                <h4 className="text-white fs-5 mb-2">Limmited Offers</h4>
                <h3 className="text-white fs-4 mb-3">Quality Armchair</h3>
              </div>
              <Clock />
              <motion.button
                className="buy__btn store__btn"
                whileHover={{ scale: 1.2 }}
              >
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="12" className="text-end couter__img">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ------- New Arrival---------*/}
      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">New Arrivals</h2>
            </Col>
            <ProductList data={mobileProducts} />
            <ProductList data={wirelessProducts} />
          </Row>
        </Container>
      </section>

      {/* ------- Population---------*/}
      <section className="population__category">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Population in Category</h2>
            </Col>
            <ProductList data={popularProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Home;

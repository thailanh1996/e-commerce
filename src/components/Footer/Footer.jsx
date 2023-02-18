import React from "react";
import "./footer.scss";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/eco-logo.png";
import { Link } from "react-router-dom";
//
function Footer(props) {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer className="footer">
        <Container>
          <Row>
            <Col lg="4">
              <div className="logo ">
                <div>
                  <h1 className="text-white">Multimart</h1>
                </div>
              </div>

              <p className="footer__text mt-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
                veniam eius quaerat enim est explicabo aliquid, sint dolor
                eligendi incidunt!
              </p>
            </Col>
            <Col lg="3">
              <div className="footer__quick-links">
                <h4 className="quick__links-title">Top Categories</h4>
                <ListGroup className="mb-3">
                  <ListGroupItem className="ps-0 border-0">
                    <Link to="#">Mobile Phones</Link>
                  </ListGroupItem>

                  <ListGroupItem className="ps-0 border-0">
                    <Link to="#">Modern Sofa</Link>
                  </ListGroupItem>

                  <ListGroupItem className="ps-0 border-0">
                    <Link to="#">Arm Chair</Link>
                  </ListGroupItem>

                  <ListGroupItem className="ps-0 border-0">
                    <Link to="#">Smart Watches</Link>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
            <Col lg="2">
              <div className="footer__quick-links">
                <h4 className="quick__links-title">Useful Links</h4>
                <ListGroup className="mb-3">
                  <ListGroupItem className="ps-0 border-0">
                    <Link to="/shop">Shop</Link>
                  </ListGroupItem>

                  <ListGroupItem className="ps-0 border-0">
                    <Link to="/cart">Cart</Link>
                  </ListGroupItem>

                  <ListGroupItem className="ps-0 border-0">
                    <Link to="/login">Login</Link>
                  </ListGroupItem>

                  <ListGroupItem className="ps-0 border-0">
                    <Link to="#">Privacy Policy</Link>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
            <Col lg="3">
              <div className="footer__quick-links">
                <h4 className="quick__links-title">Contact</h4>
                <ListGroup className="mb-3 ">
                  <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                    <span>
                      <i className="ri-map-pin-line"></i>
                    </span>
                    <p>55 Nguyễn Thị Định, Chư Sê, Gia Lai</p>
                  </ListGroupItem>

                  <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                    <span>
                      <i className="ri-phone-line"></i>
                    </span>
                    <p>+84326161617</p>
                  </ListGroupItem>

                  <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                    <span>
                      <i className="ri-mail-line"></i>
                    </span>
                    <p>thailanh123@gmail.com</p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>

            <Col lg="12" className="text-center">
              <p className="footer__copyright ">
                Copyright {year} developed by Thai Lanh. All rights reserved
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;

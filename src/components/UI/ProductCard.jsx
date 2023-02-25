import { motion } from "framer-motion";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Col } from "reactstrap";
import useGetData from "../../custom-hook/useGetData";
import { cartActions } from "../../redux/slices/cartSlice";
import "../../style/product-card.scss";

//
function ProductCard({ item }) {
  const { data: products } = useGetData("products");

  console.log(products);

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        image: item.imgUrl,
      })
    );

    toast.success("Product added successfully!");
  };

  return (
    <Col lg="3" className="mb-2">
      <div className="product__item">
        <div className="product__img">
          <motion.img src={item.imgUrl} alt="" whileHover={{ scale: 0.9 }} />
        </div>
        <div className="product__info p-2">
          <h3 className="product__name">
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </h3>
          <span>{item.category}</span>
        </div>
        <div className="product__card--bottom p-2">
          <span className="price">${item.price}</span>
          <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
            <i className="ri-add-line"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
}

export default ProductCard;

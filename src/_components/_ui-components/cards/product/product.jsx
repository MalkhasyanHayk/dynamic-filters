import React from "react";
import classes from "./product.module.css"
import PropTypes from "prop-types";
import LazyLoadsImages from "../../../lazy-loads/lazy-loads-images/lazy-loads-images.jsx";

const Product = ({name, category, brand, price, rating, imageUrl}) => {

    return (
        <div className={classes.product} data-name={name.split(" ")[0]}>
            <div className={classes.pinned}>
                <span className={classes.brand}>{brand}</span>
                <span className={classes.rating}><span>★</span>{rating}</span>
            </div>
            <div className={classes.imageContainer}>
                <LazyLoadsImages src={imageUrl} alt={name}/>
            {/*<img src={imageUrl} alt={name}/>*/}
            </div>
            <div className={classes.infoContainer}>
                <h2 className={classes.name}>{name}</h2>
                <small className={classes.category}>{category}</small>
                <span className={classes.price}>{price}$</span>
            </div>
            <button className={classes.buyButton}>Buy Now</button>
        </div>
    );
};

Product.propTypes = {
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    brand: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    rating: PropTypes.number,
    imageUrl: PropTypes.string
}

export default Product;
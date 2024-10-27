import React from "react";
import classes from "./show-products.module.css"
import PropTypes from "prop-types";
import Product from "../../../../_components/_ui-components/cards/product/product.jsx";
import EmptyData from "../../../../_components/_ui-components/messages/empty-data/empty-data.jsx";

const ShowProducts = ({products}) => {

    return (
        <div className={classes.showProducts}>
            {products?.length ?
                <div className={classes.products}>
                    {products.map(({id, brand, category, price, name, rating, imageUrl}) => (
                        <div key={`product-${id}`}>
                            <Product
                                category={category}
                                brand={brand}
                                price={price}
                                name={name}
                                rating={rating}
                                imageUrl={imageUrl}
                            />
                        </div>
                    ))}
                </div>
                :
                <EmptyData message={"No products found"}/>
            }
        </div>
    );
};

ShowProducts.propTypes = {
    products: PropTypes.array
}

export default ShowProducts;
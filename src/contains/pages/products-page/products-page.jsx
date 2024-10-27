import classes from "./products-page.module.css";
import ProductFilter from "../../../_components/filters/product-filter/product-filter.jsx";
import ShowProducts from "./show-products/show-products.jsx";
import useProducts from "./use.products.js";
import DataProgress from "../../../_components/_ui-components/spinners/data-progress/data-progress.jsx";
import ProductFilterMobile from "../../../_components/filters/product-filter-mobile/product-filter-mobile.jsx";

const ProductsPage = () => {
    const {
        progress,
        products,
        brands,
        categories,
        values,
        handleListed,
        onField
    } = useProducts()

    return (
        <div className={classes.productsPage}>
            <div className={classes.isSticky}>
                <ProductFilter
                    categories={categories}
                    brands={brands}
                    values={values}
                    onChange={handleListed}
                    onField={onField}
                />
                <ProductFilterMobile
                    categories={categories}
                    brands={brands}
                    values={values}
                    onChange={handleListed}
                    onField={onField}
                />
            </div>
            <div>
                {progress
                    ? <DataProgress/>
                    : <ShowProducts products={products}/>
                }
            </div>
        </div>
    );
};

export default ProductsPage;
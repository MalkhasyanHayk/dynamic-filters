import classes from "./product-filter-mobile.module.css";
import PropTypes from "prop-types";
import DefaultModal from "../../modals/default-modal/default-modal.jsx";
import ModalContent from "./modal-content/modal-content.jsx";

const ProductFilterMobile = ({categories, brands, values, onChange, onField}) => {

    return (
        <div className={classes.productFilterMobile}>
            <h2>Products</h2>
            <DefaultModal title={"Filters"}>
                <ModalContent
                    categories={categories}
                    brands={brands}
                    values={values}
                    onChange={onChange}
                    onField={onField}

                />
            </DefaultModal>
        </div>
    );
};

ProductFilterMobile.propTypes = {
    categories: PropTypes.array.isRequired,
    brands: PropTypes.array.isRequired,
    values: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onField: PropTypes.func.isRequired
}

export default ProductFilterMobile;
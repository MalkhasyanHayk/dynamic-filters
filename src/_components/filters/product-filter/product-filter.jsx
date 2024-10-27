import React from "react";
import classes from "./product-filter.module.css";
import PropTypes from "prop-types";
import CheckboxListDropDown from "../../_ui-components/drop-downs/checkbox-list-drop-down/checkbox-list-drop-down.jsx";
import Range from "../../_ui-components/inputs/range/range.jsx";
import Rate from "../../_ui-components/inputs/rate/rate.jsx";
import SortingCheckbox from "../../_ui-components/inputs/sorting-checkbox/sorting-checkbox.jsx";
import {GoStar, GoStarFill} from "react-icons/go";

const ProductFilter = ({categories, brands, values, onChange, onField}) => {

    return (
        <div className={classes.productFilter}>
            <h2>Products</h2>
            <div>
                <div>
                    <CheckboxListDropDown
                        label={"Categories"}
                        nameKey={"categories"}
                        options={categories}
                        selected={values.categories}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <CheckboxListDropDown
                        label={"Brands"}
                        nameKey={"brands"}
                        options={brands}
                        selected={values.brands}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <Range
                        label={"Price"}
                        name={"price"}
                        min={0}
                        max={10000}
                        step={100}
                        values={values.price}
                        onChange={onField}
                    />
                </div>
                <div>
                    <Rate
                        label={"Rate"}
                        maxRate={5}
                        name={"rate"}
                        value={values.rate}
                        onRate={onField}
                    />
                </div>
                <div>
                    <SortingCheckbox
                        title={"Sort by Price"}
                        label={"$"}
                        name={"price"}
                        valueKey={"sort"}
                        checked={values.sort}
                        onChange={onField}
                    />
                </div>
                <div>
                    <SortingCheckbox
                        title={"Sort by Rating"}
                        label={<GoStarFill />}
                        name={"rating"}
                        valueKey={"sort"}
                        checked={values.sort}
                        onChange={onField}
                    />
                </div>
            </div>
        </div>
    );
};

ProductFilter.propTypes = {
    categories: PropTypes.array.isRequired,
    brands: PropTypes.array.isRequired,
    values: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onField: PropTypes.func.isRequired,
}

export default ProductFilter;
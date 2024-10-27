import classes from "./modal-content.module.css";
import CheckboxListContent
    from "../../../_ui-components/drop-downs/checkbox-list-drop-down/checkbox-list-content/checkbox-list-content.jsx";
import Range from "../../../_ui-components/inputs/range/range.jsx";
import Rate from "../../../_ui-components/inputs/rate/rate.jsx";
import PropTypes from "prop-types";
import SortingCheckbox from "../../../_ui-components/inputs/sorting-checkbox/sorting-checkbox.jsx";
import {GoStarFill} from "react-icons/go";
import React from "react";

const ModalContent = ({categories, brands, values, onChange, onField}) => {

    return (
        <div className={classes.modalContent}>
            <div>
                <h4>Categories {values?.categories?.length > 0 ? `(${values.categories.length})` : null}</h4>
                <CheckboxListContent
                    label={"Categories"}
                    options={categories}
                    selected={values.categories}
                    nameKey={"categories"}
                    onChange={onChange}
                />
            </div>

            <div>
                <h4>Brands {values?.brands?.length > 0 ? `(${values.brands.length})` : null}</h4>
                <CheckboxListContent
                    label={"Brands"}
                    options={brands}
                    selected={values.brands}
                    nameKey={"brands"}
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
                    alternativeLabel={"Sort by Price"}
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
                    alternativeLabel={"Sort by Rating"}
                    label={<GoStarFill/>}
                    name={"rating"}
                    valueKey={"sort"}
                    checked={values.sort}
                    onChange={onField}
                />
            </div>
        </div>
    );
};

ModalContent.propTypes = {
    categories: PropTypes.array.isRequired,
    brands: PropTypes.array.isRequired,
    values: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onField: PropTypes.func.isRequired
}

export default ModalContent;
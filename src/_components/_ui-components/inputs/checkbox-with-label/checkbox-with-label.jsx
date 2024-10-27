import React from "react";
import classes from "./checkbox-with-label.module.css";
import DefaultCheckbox from "../default-checkbox/default-checkbox.jsx";
import PropTypes from "prop-types";

const CheckboxWithLabel = ({id, name, value, checked, onChange, disabled, label}) => {

    return (
        <label htmlFor={id} className={classes.checkboxWithLabel}>
            <DefaultCheckbox
                id={id}
                name={name}
                checked={checked}
                disabled={disabled}
                value={value}
                onChange={onChange}
            />
            <span className={classes.label}>{label}</span>
        </label>
    );
};

CheckboxWithLabel.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    disabled: PropTypes.bool,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
}

export default CheckboxWithLabel;
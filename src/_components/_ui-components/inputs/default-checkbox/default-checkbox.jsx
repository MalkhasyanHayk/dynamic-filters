import React from "react";
import classes from "./default-checkbox.module.css";
import PropTypes from "prop-types";

const DefaultCheckbox = ({id, name, value, checked, onChange, disabled}) => {

    return (
        <div className={classes.defaultCheckbox}>
            <input
                type="checkbox"
                name={name}
                id={id}
                value={value}
                checked={checked}
                disabled={disabled}
                className={classes.input}
                hidden
                onChange={onChange}
            />
            <span className={classes.switcher}/>
        </div>
    );
};

DefaultCheckbox.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    disabled: PropTypes.bool,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
}

export default DefaultCheckbox;
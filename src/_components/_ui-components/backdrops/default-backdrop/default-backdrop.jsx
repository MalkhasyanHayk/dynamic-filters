import React from "react";
import classes from "./default-backdrop.module.css";
import PropTypes from "prop-types";

const DefaultBackdrop = ({onClose}) => {

    return (
        <div className={classes.defaultBackdrop} onClick={onClose}/>
    );
};

DefaultBackdrop.propTypes = {
    onClose: PropTypes.func.isRequired
}

export default DefaultBackdrop;
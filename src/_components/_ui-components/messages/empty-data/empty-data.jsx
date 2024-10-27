import React from "react";
import classes from "./empty-data.module.css";
import PropTypes from "prop-types";

const EmptyData = ({message}) => {

    return (
        <span className={classes.emptyData}>{message}</span>
    );
};

EmptyData.propTypes = {
    message: PropTypes.string.isRequired
}

export default EmptyData;
import React from "react";
import classes from "./rate.module.css";
import PropTypes from "prop-types";

const Rate = ({label, maxRate, name, value, onRate}) => {

    return (
        <div className={classes.container}>
            <span>{label}</span>
            <div className={classes.rate}>
                {new Array(maxRate).fill("").map((item, index) => {

                    return (
                        <span
                            key={`star-item-${index}`}
                            className={maxRate - index <= value
                                ? classes.checked
                                : classes.unchecked
                            }
                            onClick={onRate?.bind(this, name, maxRate - index)}
                        >
                            ★
                        </span>
                    )
                })}
            </div>
        </div>
    );
};

Rate.propTypes = {
    label: PropTypes.string.isRequired,
    maxRate: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    onRate: PropTypes.func.isRequired
}

export default Rate;
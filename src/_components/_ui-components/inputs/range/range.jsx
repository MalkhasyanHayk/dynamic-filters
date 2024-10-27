import React from "react";
import RangeSlider from 'react-range-slider-input';
import classes from "./range.module.css";
import 'react-range-slider-input/dist/style.css';
import PropTypes from "prop-types";
import {useCallback, useState} from "react";

const Range = ({label, name, values, min = 0, max, step = 1, onChange}) => {
    const [s, setS] = useState(values)

    const handleChangingEnd = useCallback(() =>  onChange(name, s), [name, onChange, s])

    return (
        <div className={classes.container}>
            <span>{label}</span>
            <div className={classes.range}>
                <span>{s[0]}</span>
                <RangeSlider
                    min={min}
                    max={max}
                    step={step}
                    defaultValue={s}
                    onInput={value => setS(value)}
                    onThumbDragEnd={handleChangingEnd}
                    onRangeDragEnd={handleChangingEnd}
                />
                <span>{s[1]}</span>
            </div>
        </div>
    );
};

Range.propTypes = {
    label: PropTypes.string.isRequired,
    values: PropTypes.array.isRequired,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default Range;
import React from "react";
import classes from "./checkbox-list-content.module.css";
import CheckboxWithLabel from "../../../inputs/checkbox-with-label/checkbox-with-label.jsx";
import EmptyData from "../../../messages/empty-data/empty-data.jsx";
import PropTypes from "prop-types";

const CheckboxListContent = ({options, label, nameKey, selected, onChange}) => {

    return (
        <div className={classes.content}>
            {options?.length
                ? options.map(({id, option}) => {

                    return (
                        <div key={`${label}-option-${id}`}>
                            <CheckboxWithLabel
                                label={option}
                                id={`${option?.toLowerCase()}-${id}`}
                                name={nameKey ?? option}
                                value={option}
                                checked={selected.includes(option)}
                                onChange={onChange}
                            />
                        </div>
                    )
                })
                : <EmptyData message={"Not available option"}/>
            }
        </div>
    );
};

CheckboxListContent.propTypes = {
    label: PropTypes.string.isRequired,
    nameKey: PropTypes.string,
    options: PropTypes.array,
    selected: PropTypes.array,
    onChange: PropTypes.func.isRequired
}

export default CheckboxListContent;
import React, {useCallback} from 'react';
import classes from "./sorting-checkbox.module.css";
import {GoArrowDown, GoArrowUp, GoSkipFill} from "react-icons/go";
import PropTypes from "prop-types";

const SortingCheckbox = ({label, valueKey, title, alternativeLabel, name, checked, disabled = false, onChange}) => {
    const cls = [
        classes.sortingCheckbox,
        alternativeLabel
            ? classes.alternateSortingCheckbox
            : classes.defaultSortingCheckbox
    ]
    
    const handleCheck = useCallback(event => {
        const {name, checked: status} = event.target
        onChange(valueKey, {name, status})
    }, [onChange])

    return (
        <label className={cls.join(" ")} title={title}>
            <input
                hidden
                type="checkbox"
                name={name}
                checked={checked.status}
                disabled={disabled}
                onChange={handleCheck}
            />
            {alternativeLabel
                ? <span className={classes.alternateLabel}>{alternativeLabel}</span>
                : <span className={classes.label}>{label}</span>
            }
            <span>
                    {checked?.name !== name
                        ? <GoSkipFill className={classes.nothing}/>
                        : checked.status
                            ? <GoArrowDown className={classes.toUp}/>
                            : <GoArrowUp className={classes.toBottom}/>
                    }
                </span>
        </label>
    );
};

SortingCheckbox.propTypes = {
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    title: PropTypes.string,
    alternativeLabel: PropTypes.string,
    name: PropTypes.string.isRequired,
    valueKey: PropTypes.string.isRequired,
    checked: PropTypes.object.isRequired,
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired
}

export default SortingCheckbox;
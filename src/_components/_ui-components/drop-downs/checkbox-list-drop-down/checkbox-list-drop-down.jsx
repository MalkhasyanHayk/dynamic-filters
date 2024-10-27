import React from "react";
import classes from "./checkbox-list-drop-down.module.css";
import PropTypes from "prop-types";
import useToggle from "../../../../_hooks/use.toggle.js";
import DefaultBackdrop from "../../backdrops/default-backdrop/default-backdrop.jsx";
import CheckboxListContent from "./checkbox-list-content/checkbox-list-content.jsx";

const CheckboxListDropDown = ({label, nameKey, options, selected, onChange}) => {
    const [isOpen, handleIsOpen] = useToggle()

    return (
        <div className={classes.checkboxListDropDown}>
            <div className={classes.header} onClick={handleIsOpen}>
                <span className={classes.label}>{label}</span>
                <div>
                    {selected?.length > 0 && <span className={classes.selectedCount}>{selected.length}</span>}
                    <span className={classes.arrows}>{isOpen ? "▲" : "▼"}</span>
                </div>
            </div>
            {isOpen && (
                <>
                    <DefaultBackdrop onClose={handleIsOpen}/>
                    <div className={classes.content}>
                        <CheckboxListContent
                            label={label}
                            options={options}
                            selected={selected}
                            nameKey={nameKey}
                            onChange={onChange}
                        />
                    </div>
                </>
            )}
        </div>
    );
};

CheckboxListDropDown.propTypes = {
    label: PropTypes.string.isRequired,
    nameKey: PropTypes.string,
    options: PropTypes.array,
    selected: PropTypes.array,
    onChange: PropTypes.func.isRequired
}

export default CheckboxListDropDown;
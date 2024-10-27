import classes from "./default-modal.module.css";
import FilterIcon from "../../../assets/images/filter.png";
import PropTypes from "prop-types";
import useToggle from "../../../_hooks/use.toggle.js";
import DefaultBackdrop from "../../_ui-components/backdrops/default-backdrop/default-backdrop.jsx";

const DefaultModal = ({title, children}) => {
    const [isOpen, handleOpen] = useToggle()

    return (
        <div>
            <button className={classes.button} onClick={handleOpen}>
                <img src={FilterIcon} alt={"modal-toggle-button"}/>
            </button>
            {isOpen && (
                <>
                    <DefaultBackdrop onClose={handleOpen}/>
                    <div className={classes.modal}>
                        <div className={classes.header}>
                            <h3>{title}</h3>
                            <button onClick={handleOpen}>&#10006;</button>
                        </div>
                        <div className={classes.content}>
                            {children}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

DefaultModal.propTypes = {
    children: PropTypes.object,
    title: PropTypes.string
}

export default DefaultModal;
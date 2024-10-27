import classes from "./header.module.css"

const Header = () => {

    return (
        <div className={classes.header}>
            <div>
                <h1>Dynamic filtering</h1>
            </div>
            <div>{/*Here must be navigations menu*/}</div>
        </div>
    );
};

export default Header;
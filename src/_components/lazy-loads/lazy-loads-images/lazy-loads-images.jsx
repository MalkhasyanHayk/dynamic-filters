import React from "react";
import LazyLoad from 'react-lazyload';
import PropTypes from "prop-types";
const LazyLoadsImages = ({src, alt}) => {

    return (
        <LazyLoad>
            <img src={src} alt={alt} />
        </LazyLoad>
    );
};

LazyLoadsImages.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string
}

export default LazyLoadsImages;
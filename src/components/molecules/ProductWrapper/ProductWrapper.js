import React from "react"
import PropTypes from "prop-types";

import styles from './productWrapper.module.scss';

const ProductWrapper = ({ children }) => {
    return (
        <div className={styles.container}>
            {children}
        </div>)
}

export default ProductWrapper;

ProductWrapper.propTypes = {
    children: PropTypes.node
}

ProductWrapper.defaultProps = {
    children: null
}
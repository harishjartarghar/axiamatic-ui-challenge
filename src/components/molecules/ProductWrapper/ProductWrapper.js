import React from "react"

import styles from './emptyProduct.module.scss';

const ProductWrapper = ({ children }) => {
    return (
        <div className={styles.container}>
            {children}
        </div>)
}

export default ProductWrapper
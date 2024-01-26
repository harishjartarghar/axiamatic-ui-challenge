import React from "react"
import PropTypes from "prop-types";

import ProductWrapper from "../ProductWrapper";

import styles from './selectedProduct.module.scss';

const SelectedProduct = ({ product, onRemove }) => {
    const { label, image, id } = product;

    return (
        <ProductWrapper>
            <div className={styles.container}>
                <div className={styles.imageLabelContainer}>
                    <img
                        src={image}
                        height={25}
                        width={25}
                    />
                    <span>{label}</span>
                </div>
                <button className={styles.removeButton} onClick={() => onRemove(id)}>
                    <span className={styles.cross}>X</span> Remove
                </button>
            </div>
        </ProductWrapper>)
}

export default SelectedProduct;

SelectedProduct.propTypes = {
    product: PropTypes.shape({
        label: PropTypes.string,
        image: PropTypes.string,
        id: PropTypes.string
    }),
    onRemove: PropTypes.func
}

SelectedProduct.defaultProps = {
    product: {
        label: '',
        image: '',
        id: ''
    },
    onRemove: () => { }
}
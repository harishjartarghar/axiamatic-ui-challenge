import React from "react"

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

export default SelectedProduct
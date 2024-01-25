import React from "react"

import { AiOutlinePlus } from "react-icons/ai";

import ProductWrapper from "../ProductWrapper";

import styles from './emptyProduct.module.scss';

const EmptyProduct = () => {
    return (
        <ProductWrapper>
            <div className={styles.addContainer}>
                <AiOutlinePlus />
            </div>
        </ProductWrapper>)
}

export default EmptyProduct
import React from "react"

import ProductAddSection from "@/components/organisms/ProductAddSection"
import ProductsSection from "@/components/organisms/ProductsSection"

import styles from './productSelectionPage.module.scss'

const ProductsSelectionPage = () => (
    <div>
        <h1 className={styles.label}>axiamatic</h1>
        <div className={styles.container}>
            <div className={styles.subContainer}>
                <ProductsSection />
                <ProductAddSection />
            </div>
        </div>
    </div>
);

export default ProductsSelectionPage
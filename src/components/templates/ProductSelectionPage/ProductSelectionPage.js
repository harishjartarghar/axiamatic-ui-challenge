import React from "react"

import ProductAddSection from "@/components/organisms/ProductAddSection"
import ProductsSection from "@/components/organisms/ProductsSection"

import styles from './productSelectionPage.module.scss'

const ProductsSelectionPage = () => (
    <div className={styles.container}>
        <ProductsSection />
        <ProductAddSection />
    </div>
);

export default ProductsSelectionPage
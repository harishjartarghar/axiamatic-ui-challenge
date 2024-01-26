import React from "react"

import EmptyProduct from "@/components/molecules/EmptyProduct"
import SelectedProduct from "@/components/molecules/SelectedProduct"

import useProducts from "@/hooks/useProducts";

import styles from './productSection.module.scss';

const ProductsSection = () => {
    const { productsIds, handleRemove } = useProducts();
    const productsIdsSelected = Object.keys(productsIds);
    const numberOfProducts = productsIdsSelected.length;


    return (
        <div className={styles.container}>
            <div className={styles.gridContainer}>
                {productsIdsSelected.map((id) => (<SelectedProduct key={id} product={productsIds[id]} onRemove={handleRemove} />))}
                {Array.from({ length: 4 - numberOfProducts }, (id, index) => <EmptyProduct key={index} />)}
            </div>
            <p className={styles.count}>{`${numberOfProducts} Product Added`}</p>
        </div>
    )
}

export default ProductsSection
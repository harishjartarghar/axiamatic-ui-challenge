import React from "react"

import StepCounter from "@/components/atoms/StepCounter"
import AutoCompleteInput from "@/components/molecules/AutoComplete"

import useProducts from "@/hooks/useProducts"

import NextButton from "@/components/atoms/NextButton";

import { LABELS } from "@/base/constants/label.constants";

import styles from './productAddSection.module.scss';

const ProductsAddSection = () => {
    const { data, handleAdd, handleRemove, productsIds } = useProducts();
    const numberOfProducts = Object.keys(productsIds).length;

    return (
        <div className={styles.container}>
            <div>
                <StepCounter />
            </div>
            <div>
                <p className={styles.heading}>{LABELS.HEADING}</p>
                <p className={styles.subHeading}>{LABELS.SUB_HEADING}</p>
            </div>
            <div className={styles.inputButtonContainer}>
                <AutoCompleteInput
                    data={data}
                    handleClick={handleAdd}
                    handleRemove={handleRemove}
                    productsIds={productsIds}
                />
                <NextButton disabled={numberOfProducts < 1} />
            </div>
        </div>)
}

export default ProductsAddSection
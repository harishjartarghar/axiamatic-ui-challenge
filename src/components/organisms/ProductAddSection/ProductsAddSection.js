import React from "react"

import StepCounter from "@/components/atoms/StepCounter"
import AutoCompleteInput from "@/components/molecules/AutoComplete/AutoComplete"
import useProducts from "@/hooks/useProducts"

import styles from './productAddSection.module.scss';

const ProductsAddSection = () => {
    const { data, handleAdd, productsIds } = useProducts()
    return (
        <div>
            <StepCounter />
            <p className={styles.heading}>Let's Add your internal tools</p>
            <p className={styles.subHeading}>Search to quickly add products your team used today. <br />You will be able to add as many, as you need later but for <br /> now lets add four.</p>
            <AutoCompleteInput
                data={data}
                onSelected={handleAdd}
                productsIds={productsIds}
            />
        </div>)
}

export default ProductsAddSection
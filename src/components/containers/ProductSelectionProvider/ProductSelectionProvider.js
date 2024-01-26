import React, { useCallback, useMemo, useState } from "react";
import PropTypes from "prop-types";

import ProductsContext from "@/context/ProductsContext";
import INTERNAL_TOOLS from "@/base/constants/internalTools";


const ProductSelectionProvider = ({ children }) => {

    const [productsIds, setProductsIds] = useState({});

    const handleAdd = useCallback((id, value) => {
        if (Object.keys(productsIds).length >= 4) return;

        setProductsIds(prev => ({ ...prev, [id]: value }))
    }, [productsIds]);

    const handleRemove = useCallback((id) => {
        if (productsIds[id]) {
            let tempId = { ...productsIds }
            delete tempId[id];
            setProductsIds(tempId)
            return;
        }
    }, [productsIds])

    const contextValues = useMemo(() => ({
        data: INTERNAL_TOOLS,
        productsIds,
        handleAdd,
        handleRemove
    }), [
        productsIds,
        handleAdd,
        handleRemove
    ])

    return (
        <ProductsContext.Provider value={contextValues}>
            {children}
        </ProductsContext.Provider>);
}

export default ProductSelectionProvider;

ProductSelectionProvider.propTypes = {
    children: PropTypes.node
}

ProductSelectionProvider.defaultProps = {
    children: null
}
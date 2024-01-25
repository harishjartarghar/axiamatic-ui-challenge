import React from 'react';

import ProductsSelectionPage from '@/components/templates/ProductSelectionPage';
import ProductSelectionProvider from '@/components/containers/ProductSelectionProvider';

import './App.css'


const App = () =>
    <ProductSelectionProvider>
        <ProductsSelectionPage />
    </ProductSelectionProvider>;

export default App;

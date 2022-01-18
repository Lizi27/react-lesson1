import React from 'react';
import PropTypes from 'prop-types';
import SampleCard from './ProductCard';
import ProductList from "./ProductList";

function ListView({products, icon}) {

    return (
        <table className="table table-bordered table-striped product-list-view mt-4">
            <tbody>
            {products.map((product) => <ProductList product={product} key={product.name}/>)}
            </tbody>
        </table>
    )
}

ListView.propTypes = {}

export default ListView


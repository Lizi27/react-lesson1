import React from 'react'
import SampleCard from './ProductCard';

function CardsView({products, icon}) {

    return (
        <div className="row">
            {products.map((product) => <SampleCard product={product} key={product.name}/>)}
        </div>
    )
}

export default CardsView


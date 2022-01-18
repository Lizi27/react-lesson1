import React from 'react'

const ProductCard = (props) => {
    return (
        <div className="col-4 mt-4">
            <div className="card">
                <img src={props.product.img} className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title text-uppercase">{props.product.name}</h5>
                    <p className="card-text">Color: {props.product.color}</p>
                    <p className="card-text">Price: <span className="price">{props.product.price} $</span></p>
                    <a href="#" className="btn btn-outline-danger">Add to cart</a>
                </div>
            </div>
        </div>
    )
}

export default ProductCard

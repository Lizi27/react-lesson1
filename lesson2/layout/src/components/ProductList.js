const ProductList = (props) => {

    return (
        <tr>
            <td><img src={props.product.img}/></td>
            <td className="text-uppercase">{props.product.name}</td>
            <td>{props.product.color}</td>
            <td className="price">{props.product.price} $</td>
            <td>
                <button className="btn btn-outline-danger">Add to cart</button>
            </td>
        </tr>
    )

}

export default ProductList
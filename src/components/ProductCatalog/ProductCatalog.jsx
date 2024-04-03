import Product from "../Product/Product";
import style from "./productcatalog.module.css";
import PropTypes from "prop-types";


function ProductCatalog({products, handleProductDetails}) {
    return (
        <div className={style.container}>
            {products.map((d) => (
                <Product 
                    key ={d.name}
                    name ={d.name}
                    price ={d.price}
                    image ={d.image}
                    description ={d.description}
                    handleProductDetails ={() => handleProductDetails(d)}
                />
            ))} 
        </div>
    )
}

ProductCatalog.propTypes = {
    products: PropTypes.array.isRequired,
    handleProductDetails: PropTypes.func.isRequired,
}

export default ProductCatalog;
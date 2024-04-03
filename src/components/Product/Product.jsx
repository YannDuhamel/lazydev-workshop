import style from './product.module.css';
import PropTypes from "prop-types";

function Product({name, price, image, category, description, handleProductDetails}) {
    return (
        <div className={style.container}>
            <img src={image} alt="image du produit en vente" className={style.containerImage}/>
            <h2 className={style.title}>{name}</h2>
            <h3 className={style.price}>{price} €</h3>
            <button className={style.button} onClick={() => handleProductDetails({name, price, image, category, description})}>Détails</button>
        </div>
    )
}

Product.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string,
    description: PropTypes.string,
    handleProductDetails: PropTypes.func.isRequired,
}

export default Product;
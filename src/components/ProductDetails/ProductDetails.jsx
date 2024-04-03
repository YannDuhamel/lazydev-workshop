import PropTypes from "prop-types";
import style from "./productdetails.module.css";


const ProductDetails = ({ name, image, price, category, description }) => {
    return (
      <div className= {style.productdetails}> 
        <img className= {style.imgdetails} src={image} alt={name} />
        <h3>{name}</h3>
        <p className={style.detailsprice}>{price} €</p>
        <p className={style.detailcategory}>{category}</p>
        <p className= {style.detaildescription}>{description}</p>
      </div>
    );
  };

  ProductDetails.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

  export default ProductDetails;
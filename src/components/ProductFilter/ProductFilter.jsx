import Data from "../../assets/Data.json";
import PropTypes from "prop-types";
import style from "./productfilter.module.css";

function ProductFilter({categoryButtons, setProducts, filteredProduct}) {   
   
    return (
        <>
        {categoryButtons.map((c) => (
            <button key={c.name} className={style.filterbutton} onClick={() => filteredProduct(c)}>
                {c}
            </button>
        ))
        }
        <button className={style.filterbutton} onClick={() => setProducts(Data)}>Toutes les catégories</button>
        </>
    )
}

ProductFilter.propTypes = {
    categoryButtons: PropTypes.array.isRequired,
    setProducts: PropTypes.func.isRequired,
    filteredProduct: PropTypes.func.isRequired,
}

export default ProductFilter;
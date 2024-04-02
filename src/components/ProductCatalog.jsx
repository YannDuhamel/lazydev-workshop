import Product from "./Product";
import data from "../assets/data/data.json";
import style from "./productcatalog.module.css";


function ProductCatalog() {
    return (

        <>
 <div className={style.container}>
        {data.map ((p)=> (
            <Product 
            key = {p.name}
            name = {p.name}
            image = {p.image}
            price = {p.price}
            />
        ))}
</div>
        </>
    );
}

export default ProductCatalog;
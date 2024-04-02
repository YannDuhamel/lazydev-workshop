import Product from "./Product";
import data from "../assets/data/data.json";


function ProductCatalog() {
    return (

        <>
        {data.map ((p)=> (
            <Product 
            key = {p.name}
            name = {p.name}
            image = {p.image}
            price = {p.price}
            />
        ))}
    
        </>
    );
}

export default ProductCatalog;
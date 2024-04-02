import style from "./product.module.css"; 
function Product ({ name , image , price,}) { 
    return (
<> 
<div className={style.container}>
<img src = {image} className={style.containerImage}/>
<h2 className = {style.title}> {name}  </h2>
<p className={style.price}> {price} €    </p>
<button  className={style.button}> details </button>
</div>
</>      
    );
}
  export default Product;

function Product ({ name , image , price,}) { 
    return (
<> 
<img src = {image}/>
<h2> {name}  </h2>
<p> {price}    </p>
<button> details </button>
</>      
    );
}
  export default Product;
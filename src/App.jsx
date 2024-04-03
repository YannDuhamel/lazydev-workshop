import './App.css';
import Data from "./assets/Data.json";
import ProductCatalog from './components/ProductCatalog/ProductCatalog';
import ProductFilter from './components/ProductFilter/ProductFilter';
import ProductDetails from './components/ProductDetails/ProductDetails';
import { useState } from 'react';

function App() {

const [products, setProducts] = useState(Data)

/* Variables nécessaires au fonctionnement du Productfilter */
const categoryButtons = [...new Set(Data.map((c) => c.category))]
const filteredProduct = (category) => {
  const newProduct = Data.filter((n) => n.category === category)
  setProducts(newProduct) 
}

/* State et variables nécessaires au fonctionnement du bouton amenant vers ProductDetails */
const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductDetail = (product) => {
    setSelectedProduct(product);
  };

  return (
    <>
      <nav>    
      <h1>Lazy Dev 2000</h1>
      </nav>
      <h2>Pour les développeurs qui préfèrent coder avec un minimum d'effort, bienvenue sur notre oasis de solutions inutiles mais incroyablement pratiques!</h2>
      <ProductFilter
      categoryButtons={categoryButtons} 
      setProducts={setProducts}
      filteredProduct={filteredProduct}/>
      <ProductCatalog 
      products={products}
      handleProductDetails={handleProductDetail}
      />
      <div>
      {selectedProduct && <ProductDetails name={selectedProduct.name} image={selectedProduct.image} price={selectedProduct.price} category={selectedProduct.category} description={selectedProduct.description} />}
      </div>
    </>
  )
}

export default App

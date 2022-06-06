import axios from "axios";
import React,{useEffect,useState} from "react";


const Products = () => {

  const [product,setProduct] = useState([])
  useEffect(()=>{
    axios.get(` http://localhost:8080/products`).then((res)=>{
setProduct(res.data)

    })
  })
  return <div>
    <h1>Products</h1>
    <div>
      {product.map((item)=>{
        return <div>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          
          </div>       

    
})}
    </div>

  </div>;
};

export default Products;

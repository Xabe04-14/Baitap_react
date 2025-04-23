import React, { useState } from 'react';
import getData from '../getData';

export default function Camera_func() {
    var arr=getData();

    const[products,setProducts]=useState(arr)
  return (
    <div style={{padding: "0px 150px",display:"flex",gap:"70px",flexWrap:"wrap"}}>
      {products.map(product=>
        <div>
            <img src={product.image}alt={product.name}></img>
            <h3>{product.name}</h3>
            <p>{product.loai}</p>
        </div>
      )}
    </div>
  )
}

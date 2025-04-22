import React from 'react';
import ShowCard from './showCard';			
import getData from './getData';

const RightContent = () => {
        console.log(getData());			
        const products = getData();			
        return (			
        <div>			
        <div id="right-content">			
        <h2>Product : </h2>			
        <div id="products">			
        {			
        products.map(product =>			
        <ShowCard loai={product.loai} name={product.name} image={product.image}/>)}			
        <div style={{clear: 'both'}} />			
        </div>			
        <div style={{clear: 'both'}} />			
        </div>			
        <div style={{clear: 'both'}} />			
        </div>			
        );			
        }			

export default RightContent;
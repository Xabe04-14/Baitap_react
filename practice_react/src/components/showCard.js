import React from 'react';

function showCard(props) {
    return (
        <div className="product">							
        <div className="text">							
        <div className="p-name"><a href="item.html">{props.loai}</a></div>							
        </div>							
        <div className="p-img">							
        <img src={props.image} width={200} height={200} alt="" />							
        </div>							
        <div className="text">							
        <div className="p-cat">{props.name} </div>							
        <div className="p-price">Please Call</div>							
        <input type="button" className="button" name="add" defaultValue="Add to cart" />							
        </div>							
        <div className="clear" />							
        </div>							
        );							
        }							

export default showCard;
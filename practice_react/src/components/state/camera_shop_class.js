import React, { Component } from 'react';
import getData from '../getData';

export default class Camera_shop_class extends Component {
    constructor(props){
        var arr =getData();
        super(props)
        this.state={arr};
    }
    
    render() {
        return (
        <div style={{padding: "0px 150px",display:"flex",gap:"70px",flexWrap:"wrap"}}>
            {this.state.arr.map((key=>
            <div>
                <img src={key.image} alt="hình ảnh"></img>
                <p>Tên sản phẩm: {key.name}</p>
                <p>Loại sản phẩm: {key.loai}</p>
            </div>
            
            ))};
        </div>
        )
    }
    }

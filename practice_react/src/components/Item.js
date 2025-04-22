import React from 'react'

export default function Item(props) {
    return (
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <img src={props.link} alt="" />
        <p>Mô tả sản phẩm: {props.title}</p>
        <p>Giá Sản phẩm: {props.price}</p>
      </div>
    );
  }

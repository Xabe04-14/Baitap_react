import axios from "axios";
import React ,{ useEffect, useState } from "react";

function ProductListFunction (){
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      axios.get('http://127.0.0.1:8000/api/products')
        .then(response => {
          setProducts(response.data);
        })
        .catch(error => {
          console.error('Lỗi khi lấy dữ liệu:', error);
        });
    }, []);
  
    return (
      <div>
        <h2>Danh sách sản phẩm (Function Component)</h2>
        <table className="product-table">
          <thead>
            <tr>
              <th>Tên sản phẩm</th>
              <th>Giá</th>
              <th>Hình ảnh</th>
              <th>Mô tả</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.unit_price}</td>
                <td>
                  <img src={product.image} alt={product.name} width="100" />
                </td>
                <td>{product.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default ProductListFunction;
  

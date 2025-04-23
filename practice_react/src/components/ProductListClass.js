import React, { Component } from 'react';
import axios from 'axios';

class ProductListClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/products')
      .then(response => {
        this.setState({ products: response.data });
      })
      .catch(error => {
        console.error('Lỗi khi lấy dữ liệu:', error);
      });
  }

  render() {
    return (
      <div>
        <h2>Danh sách sản phẩm</h2>
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
            {this.state.products.map(product => (
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
  }  
}

export default ProductListClass;

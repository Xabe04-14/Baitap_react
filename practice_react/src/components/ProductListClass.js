import React, { Component } from 'react';
import axios from 'axios';

class ProductListClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      searchKeyword: '', 
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

  handleSearchChange = (e) => {
    this.setState({ searchKeyword: e.target.value });
  }

  render() {
    const { products, searchKeyword } = this.state;

    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    const totalPrice = filteredProducts.reduce((sum, product) => sum + product.unit_price, 0);

    return (
      <div style={{ padding: "0px 100px" }}>
        <h2>Danh sách sản phẩm</h2>

        <input
          type="text"
          placeholder="Tìm theo tên sản phẩm..."
          value={searchKeyword}
          onChange={this.handleSearchChange}
          style={{ marginBottom: '20px', padding: '8px', width: '300px' }}
        />

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
            {filteredProducts.map(product => (
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
          <tfoot>
            <tr>
              <td colSpan="4">Tổng giá các sản phẩm được tìm thấy: {totalPrice}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default ProductListClass;

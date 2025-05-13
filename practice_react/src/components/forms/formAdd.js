// src/components/FormAddProduct.js
import React, { Component } from 'react';

class FormAddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      category: "",
      code: "",
      image: "",
      price: "",
      old_price: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const val = event.target.value;
    this.setState({
      [name]: val
    });
  }

  handleImageChange(event) {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      this.setState({ image: imageUrl });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const newProduct = {
      id: this.props.id,
      name: this.state.name,
      category: this.state.category,
      code: this.state.code,
      image: this.state.image,
      price: this.state.price,
      old_price: this.state.old_price,
    };
    this.props.onAddProduct(newProduct);
    this.setState({
      name: "",
      code: "",
      image: "",
      price: "",
      old_price: "",
    });
  }

  render() {
    return (
      <div id="form" className="card p-3 mb-4">
        <h4 className="mb-3">Thêm sản phẩm mới</h4>
        <div className="form-group">
          <label htmlFor="name">Tên sản phẩm</label>
          <input
            className="form-control"
            id="name"
            name="name"
            placeholder="Nhập tên sản phẩm"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Danh mục</label>
          <select
            className="form-control"
            id="category"
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
          >
            <option value="Thời trang nam">Thời trang nam</option>
            <option value="Thời trang nữ">Thời trang nữ</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="code">Mã sản phẩm</label>
          <input
            className="form-control"
            id="code"
            name="code"
            placeholder="Nhập mã sản phẩm"
            value={this.state.code}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Giá bán</label>
          <input
            className="form-control"
            id="price"
            name="price"
            placeholder="Nhập giá bán"
            value={this.state.price}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="old_price">Giá cũ</label>
          <input
            className="form-control"
            id="old_price"
            name="old_price"
            placeholder="Nhập giá cũ"
            value={this.state.old_price}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Ảnh sản phẩm</label>
          <input
            type="file"
            className="form-control"
            id="image"
            accept="image/*"
            onChange={this.handleImageChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-3"
          onClick={this.handleSubmit}
        >
          Thêm sản phẩm
        </button>
      </div>
    );
  }
}

export default FormAddProduct;

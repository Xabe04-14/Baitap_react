import React, { useState, useEffect } from 'react';
import { getData } from './Room.js';

const Add = () => {
  const [list, setList] = useState([]);
  const [form, setForm] = useState({
    id: '',
    name: '',
    myfile: '',
    type_room: '',
    area: '',
    price: '',
    oldprice: '',
  });

  // Load dữ liệu từ localStorage khi component mount
  useEffect(() => {
    const savedRooms = localStorage.getItem('rooms');
    if (savedRooms) {
      setList(JSON.parse(savedRooms));
    } else {
      const rom = getData();
      setList(rom);
      localStorage.setItem('rooms', JSON.stringify(rom));
    }
  }, []);

  const saveLocalStorage = (event) => {
    event.preventDefault();
    const newList = [...list, form];
    setList(newList);
    localStorage.setItem('rooms', JSON.stringify(newList));
    setForm({
      id: '',
      name: '',
      myfile: '',
      type_room: '',
      area: '',
      price: '',
      oldprice: '',
    });
  };

  const myChangeHandler = (event) => {
    const { name, value, files } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: name === 'myfile' ? files[0]?.name || '' : value,
    }));
  };

  const handleMessage = (event) => {
    event.preventDefault();
    alert('Thanks for your order!');
  };

  return (
    <div className="container">
      <h2>Add Room</h2>
      <form>
        <label>Enter your name:</label>
        <input
          className="form-control"
          type="text"
          name="name"
          value={form.name}
          onChange={myChangeHandler}
        />

        <label>Enter Image:</label>
        <input
          type="file"
          name="myfile"
          id="myfile"
          onChange={myChangeHandler}
        />
    <br></br>
        <label>Enter TypeRoom:</label>
        <input
          className="form-control"
          type="text"
          name="type_room"
          value={form.type_room}
          onChange={myChangeHandler}
        />

        <label>Enter Area:</label>
        <input
          className="form-control"
          type="text"
          name="area"
          value={form.area}
          onChange={myChangeHandler}
        />

        <label>Enter Price:</label>
        <input
          className="form-control"
          type="text"
          name="price"
          value={form.price}
          onChange={myChangeHandler}
        />

        <label>Enter oldPrice:</label>
        <input
          className="form-control"
          type="text"
          name="oldprice"
          value={form.oldprice}
          onChange={myChangeHandler}
        />

        <button
          type="submit"
          id="add"
          onClick={saveLocalStorage}
          className="btn btn-primary"
        >
          Add
        </button>

        <button
          type="button"
          id="add"
          onClick={handleMessage}
          className="btn btn-primary"
          style={{ marginLeft: '10px' }}
        >
          Đặt Phòng
        </button>
      </form>

      <br />
      <br />

      <div>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              TRANG CHỦ
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              PHÒNG VÀ MỨC GIÁ
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              ĐẶT PHÒNG
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              HÌNH ẢNH
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              GIỚI THIỆU
            </a>
          </li>
        </ul>
      </div>

      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>TYPE ROOM</th>
            <th>IMAGE</th>
            <th>AREA</th>
            <th>PRICE</th>
            <th>OLDPRICE</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.type_room}</td>
              <td>
                {item.myfile && (
                  <img
                    src={"images/" + item.myfile}
                    alt="Room"
                    style={{ width: '50px', height: '50px' }}
                  />
                )}
              </td>
              <td>{item.area}</td>
              <td>{item.price}</td>
              <td>{item.oldprice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Add;

import React, { useState } from "react";

export default function MenuWithPayment() {
  const menuItems = [
    { name: "Cà phê sữa", defaultPrice: 12000 },
    { name: "Cà phê đá", defaultPrice: 10000 },
    { name: "Sting dâu", defaultPrice: 8000 },
    { name: "Trà đá", defaultPrice: 2000 },
  ];

  const [currentMoney, setCurrentMoney] = useState("");
  const [selectedMenuItems, setSelectedMenuItems] = useState([]);
  const [message, setMessage] = useState("");

  const calculateTotal = () => {
    return selectedMenuItems.reduce((sum, selectedItem) => {
      const menuItem = menuItems.find((item) => item.name === selectedItem.name);
      return sum + (menuItem.defaultPrice * selectedItem.quantity);
    }, 0);
  };

  const handleSelectItem = (itemName) => {
    setSelectedMenuItems((prevItems) => {
      const exists = prevItems.find((item) => item.name === itemName);
      if (exists) {
        return prevItems.filter((item) => item.name !== itemName);
      } else {
        return [...prevItems, { name: itemName, quantity: 1 }];
      }
    });
  };

  const handleQuantityChange = (itemName, quantity) => {
    setSelectedMenuItems((prevItems) =>
      prevItems.map((item) =>
        item.name === itemName
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      )
    );
  };

  const handlePayment = () => {
    const total = calculateTotal();

    if (Number(currentMoney) >= total) {
      setMessage(`✅ Thanh toán thành công! Tổng tiền: ${total.toLocaleString()}₫`);
    } else {
      setMessage(`❌ Không đủ tiền! Tổng cần: ${total.toLocaleString()}₫. Vui lòng nhập lại số tiền.`);
      setCurrentMoney("");
    }
  };

  return (
    <div className="menu-container">
      <h1 className="menu-title">MENU</h1>

      <div className="money-input">
        <label>Nhập số tiền hiện tại (₫):</label>
        <input
          type="number"
          value={currentMoney}
          onChange={(e) => setCurrentMoney(e.target.value)}
          placeholder="VD: 50000"
        />
      </div>

      <div className="menu-list">
        {menuItems.map((item) => {
          const selectedItem = selectedMenuItems.find((selected) => selected.name === item.name);
          return (
            <div key={item.name} className="menu-item">
              <label className="menu-label">
                <input
                  type="checkbox"
                  checked={!!selectedItem}
                  onChange={() => handleSelectItem(item.name)}
                />
                {item.name}
              </label>

              <div className="menu-actions">
                {selectedItem && (
                  <input
                    type="number"
                    min="1"
                    value={selectedItem.quantity}
                    onChange={(e) => handleQuantityChange(item.name, parseInt(e.target.value) || 1)}
                  />
                )}
                <span>{item.defaultPrice.toLocaleString()}₫</span>
              </div>
            </div>
          );
        })}
      </div>

      <button onClick={handlePayment} className="payment-button">
        Thanh toán
      </button>

      {message && (
        <div className="message">
          {message}
        </div>
      )}

      <style>{`
        .menu-container {
          max-width: 400px;
          margin: 40px auto;
          background: #e0f0ff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }

        .menu-title {
          font-size: 24px;
          font-weight: bold;
          text-align: center;
          margin-bottom: 20px;
        }

        .money-input {
          margin-bottom: 20px;
        }

        .money-input label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
        }

        .money-input input {
          width: 100%;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        .menu-list {
          background: #fff;
          padding: 10px;
          border-radius: 8px;
        }

        .menu-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 0;
          border-bottom: 1px solid #eee;
        }

        .menu-label {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .menu-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .menu-actions input {
          width: 50px;
          padding: 5px;
          text-align: center;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        .payment-button {
          display: block;
          width: 50%;
          margin: 20px auto 0;
          background-color: #ff7b00;
          color: white;
          padding: 10px;
          font-size: 16px;
          font-weight: bold;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .payment-button:hover {
          background-color: #e66a00;
        }

        .message {
          margin-top: 20px;
          text-align: center;
          font-weight: bold;
          color: red;
        }
      `}</style>
    </div>
  );
}

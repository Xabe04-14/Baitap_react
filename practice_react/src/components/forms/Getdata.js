function data(dataName){
    switch (dataName) {
      case "products":
        const products = [
          {
            id: "1",
            name: "Awesome Soft Hat",
            category: "Thời trang nam",
            code: "L1931-414",
            price: "13.00",
            old_price: "15.00",
          },

          {
            id: "2",
            name: "Intelligent Granite Pants",
            category: "Thời trang nam",
            code: "B9151",
            price: "13.00",
            old_price: "729.00",
          },
    
          {
            id: "3",
            name: "Stylish Leather Jacket",
            category: "Thời trang nam",
            code: "L1931-415",
            price: "59.00",
            old_price: "75.00",
          },
     
          {
            id: "4",
            name: "Classic White Sneakers",
            category: "Thời trang nam",
            code: "B9152",
            price: "45.00",
            old_price: "55.00",
          },
     
          {
            id: "5",
            name: "Casual Blue Jeans",
            category: "Thời trang nam",
            code: "L1931-416",
            price: "25.00",
            old_price: "30.00",
          },
    
          {
            id: "6",
            name: "Graphic T-Shirt",
            category: "Thời trang nam",
            code: "B9153",
            price: "18.00",
            old_price: "22.00",
          },
  
          {
            id: "7",
            name: "Lightweight Hoodie",
            category: "Thời trang nam",
            code: "L1931-417",
            price: "32.00",
            old_price: "40.00",
          },
    
          {
            id: "8",
            name: "Warm Winter Coat",
            category: "Thời trang nữ",
            code: "B9154",
            price: "85.00",
            old_price: "100.00",
          },
     
          {
            id: "9",
            name: "Elegant Dress Shirt",
            category: "Thời trang nữ",
            code: "L1931-418",
            price: "40.00",
            old_price: "50.00",
          },
     
          {
            id: "10",
            name: "Comfortable Chinos",
            category: "Thời trang nữ",
            code: "B9155",
            price: "30.00",
            old_price: "35.00",
          },
        ];
     return products;
     default:
        return [];
    }
  };
  
  export default data;
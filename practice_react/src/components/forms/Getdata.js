function data(dataName){
    switch (dataName) {
      case "products":
        const products = [
          {
            id: "1",
            name: "Awesome Soft Hat",
            category: "Thời trang nam",
            code: "L1931-414",
            image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQLpGHOvrKDBVC3gcZaxAiSjEI175J56ajTlasJIISP_EVap0fNjxZhZzeGPvU3KROOCO53tB3ivn-ToA57yG4ZyI5z-XKm9S_4Iel28PHdBfSS1DmrV0Y1mhqlEyf5SzATTNWaJw&usqp=CAc",
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
          
        ];
     return products;
     default:
        return [];
    }
  };
  
  export default data;
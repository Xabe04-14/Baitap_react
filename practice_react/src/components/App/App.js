// import logo from './logo.svg';
import './App.css';
// import Header from '../Headers/header';
// import RightContent from '../rightContent';
// import Footer from '../Footers/footer';
// import LeftContent from '../leftContent';

// function App() {
//   return (
//           <div>
//             {/* Header Section Begin */}
//           <Header></Header>
//             {/* Header End */}
//             <LeftContent></LeftContent>
//          <RightContent></RightContent>
//             {/* Footer Section Begin */}
//             <Footer></Footer>
//           </div>
//         );
//       }


// export default App;

// import Item from '../Item';
// import NumberOne from '../NumberOne';
// import logo from './logo.svg';

// function App() {
//   return (
//           <div className="Container">
//             <div className='row'>
//             <Item 
//             link="https://haycafe.vn/wp-content/uploads/2022/01/Hinh-anh-cute.jpg"
//             title="Đây là áo gì đây"
//             price="200"
//             />
//               <Item 
//             link="https://haycafe.vn/wp-content/uploads/2022/01/Hinh-anh-cute.jpg"
//             title="Đây là áo gì đây"
//             price="200"
//             />
//                <Item 
//             link="https://haycafe.vn/wp-content/uploads/2022/01/Hinh-anh-cute.jpg"
//             title="Đây là áo gì đây"
//             price="200"
//             />
//                <Item 
//             link="https://haycafe.vn/wp-content/uploads/2022/01/Hinh-anh-cute.jpg"
//             title="Đây là áo gì đây"
//             price="200"
//             />
//                <Item 
//             link="https://haycafe.vn/wp-content/uploads/2022/01/Hinh-anh-cute.jpg"
//             title="Đây là áo gì đây"
//             price="200"
//             />
//                <Item 
//             link="https://haycafe.vn/wp-content/uploads/2022/01/Hinh-anh-cute.jpg"
//             title="Đây là áo gì đây"
//             price="200"
//             />
//               <NumberOne dai="300px" rong="200px" mau="yellow"
//             />
//             </div>
//             </div>
//         );
//       }


//  export default App;

import React, { Component } from 'react'
import StateDemo from '../state/stateDemo';
import DemosetState from '../state/DemosetState';
import ViduSetstate from '../state/vidu3';
import Area from '../state/Area';
import Camera_shop_class from '../state/camera_shop_class';
import Camera_func from '../state/Camera_func';
import ProductListClass from '../ProductListClass';
import ProductListFunction from '../ProductListFunc';
import Exform from '../forms/Exform';
import Grade from '../forms/Grade';
import Add from '../forms/Add';
import MenuWithPayment from '../forms/MenuPayment';
import Fashion from '../forms/Fashion';


export default class App extends Component {

  render() {
    return (
      <div>
        {/* <StateDemo/>
       <DemosetState/>
       <ViduSetstate></ViduSetstate> */}
       {/* <Area></Area> */}
       {/* <Camera_shop_class/> */}
       {/* <Camera_func></Camera_func> */}
     {/* <ProductListFunction/> */}
     {/* <ProductListClass></ProductListClass> */}
     {/* <Exform></Exform> */}
     {/* <Grade></Grade> */}
     {/* <Add></Add> */}
     <MenuWithPayment></MenuWithPayment>
     {/* <Fashion></Fashion> */}
      </div>
    )
  }
}

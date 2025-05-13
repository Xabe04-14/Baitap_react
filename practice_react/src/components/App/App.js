// import logo from './logo.svg';
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

// import React, { Component } from 'react'
// import StateDemo from '../state/stateDemo';
// import DemosetState from '../state/DemosetState';
// import ViduSetstate from '../state/vidu3';
// import Area from '../state/Area';
// import Camera_shop_class from '../state/camera_shop_class';
// import Camera_func from '../state/Camera_func';
// import ProductListClass from '../ProductListClass';
// import ProductListFunction from '../ProductListFunc';
// import Exform from '../forms/Exform';
// import Grade from '../forms/Grade';
// import Add from '../forms/Add';
// import MenuWithPayment from '../forms/MenuPayment';
// import Fashion from '../forms/Fashion';
// import FormAddProduct from '../forms/formAdd';

// export default class App extends Component {

//   render() {
//     return (
//       <div>
//         {/* <StateDemo/>
//        <DemosetState/>
//        <ViduSetstate></ViduSetstate> */}
//        {/* <Area></Area> */}
//        {/* <Camera_shop_class/> */}
//        {/* <Camera_func></Camera_func> */}
//      {/* <ProductListFunction/> */}
//      {/* <ProductListClass></ProductListClass> */}
//      {/* <Exform></Exform> */}
//      {/* <Grade></Grade> */}
//      {/* <Add></Add> */}
//      {/* <MenuWithPayment></MenuWithPayment> */}
//      <Fashion></Fashion>
//      {/* <FormAddProduct></FormAddProduct> */}
//       </div>
//     )
//   }
// }

import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import routes from "../routes"

export default function App() {
  const showContent = (routes)=>{
    let result=null;
    if (routes.length>0){
      result= routes.map((route,index)=>
      {
        return(
          <Route key={index} path={route.path} exact={route.exact} element={route.element}></Route>
        )
      });
    }
    return result;
  }
  return (
    <BrowserRouter>
      <div>
        <h2>Welcome to React Router Tutorial</h2>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto nav-list">
          <li><NavLink to={'/'} className="nav-link">Home</NavLink></li>
          <li><NavLink to={'/Contact'} className="nav-link">Contact</NavLink></li>
          <li><NavLink to={'/About'} className="nav-link">About Us</NavLink></li>
          <li><NavLink to={'*'} className="nav-link">Not found</NavLink></li>
        </ul>
      </nav>
        <hr />
        <Routes>
         {showContent(routes)}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

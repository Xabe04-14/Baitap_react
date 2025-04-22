import logo from './logo.svg';
import './App.css';
import Header from '../Headers/header';
import RightContent from '../rightContent';
import Footer from '../Footers/footer';
import LeftContent from '../leftContent';

function App() {
  return (
          <div>
            {/* Header Section Begin */}
          <Header></Header>
            {/* Header End */}
            <LeftContent></LeftContent>
         <RightContent></RightContent>
            {/* Footer Section Begin */}
            <Footer></Footer>
          </div>
        );
      }


export default App;

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


// export default App;

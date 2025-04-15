import logo from './logo.svg';
import './App.css';
import Header from '../Headers/header';
import Breadcrumb from '../Breadcrumb/breadcrumb';
import Product from '../Product_shop/product';
import Partner from '../Partner_logo/partner_logo';
import Footer from '../Footers/footer';

function App() {
  return (
          <div>
            {/* Page Preloder */}
            <div id="preloder">
              <div className="loader" />
            </div>
            {/* Header Section Begin */}
          <Header></Header>
            {/* Header End */}
            {/* Breadcrumb Section Begin */}
          <Breadcrumb></Breadcrumb>
            {/* Breadcrumb Section Begin */}
            {/* Product Shop Section Begin */}
            <Product></Product>
            {/* Product Shop Section End */}
            {/* Partner Logo Section Begin */}
            <Partner></Partner>
            {/* Partner Logo Section End */}
            {/* Footer Section Begin */}
            <Footer></Footer>
          </div>
        );
      }


export default App;

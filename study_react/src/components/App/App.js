import logo from './logo.svg';
import './App.css';
import One from "../one";
import To from "../to";
import Four from '../four';
import Header from '../header/header';
import Content from '../Contents/content';
import Footer from '../Footer/footer';

function App() {
  return (
      <div id="container">
      <Header></Header>
      {/* this is content area */}
     <Content/>
         {/* footer content */}
      <Footer/>
      </div>
      );
      }

export default App;

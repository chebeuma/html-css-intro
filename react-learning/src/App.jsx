//import logo from './logo.svg';
import './App.css';
//import Form from './component/form';
//import OrderSummary from './Order summary/index';
//import LoginForm from './LoginForm/index';
//import OrderSummary from './Order summary';
//import PageContainer from "./PageContainer"
import DataFetcher from './DataFetcher';
function App() {
  return (
    <div className="App">
    <div className='flex justify-between p-5 bg-blue-300 h-screen'>
    <div className='p-1'>COZY</div>
   <div className='flex flex-row  p-2'>
    <div className='p-1'>SHOP</div>
    <div className='p-1'>COLLECTIVE</div>
    <div className='p-1'>DESIGNERS</div>
    <div className='p-1'>ABOUT US</div>
    <div className='p-1'>CONTACT</div>
    </div>
    <div>cart</div>
    </div>

<DataFetcher/>
<footer className='flex flex-between bg-blue-200'>Add to Wishlist</footer>
    </div>
  );
}

export default App;

//import logo from './logo.svg';
import "./App.css";
//import AddressCard from "./components/CheckoutPage";
//import Form from './component/form';
//import OrderSummary from './Order summary/index';
//import LoginForm from './LoginForm/index';
//import OrderSummary from './Order summary';
//import PageContainer from "./PageContainer"
import Navbar from "./components/Navbar/index";
import DataFetcher from "./components/DataFetcher/index";
//import AddressCard from "./components/CheckoutPage/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <DataFetcher />
      <div>
        <footer className="flex flex-between bg-blue-200 text-green-500 p-3">
          Add to Wishlist
        </footer>
      </div>
    </div>
  );
}

export default App;

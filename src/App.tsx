import { Button, ThemeProvider } from '@mui/material';
import './App.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Navbar from './customer/components/navbar/Navbar';
import customTheme from './theme/customTheme';
import Home from './customer/pages/home/Home';
import Product from './customer/pages/product/Product';
import PageDetails from './customer/pages/details/ProductDetails';
import ProductDetails from './customer/pages/details/ProductDetails';
import Review from './customer/pages/review/Review';
import Cart from './customer/pages/cart/Cart';
import Checkout from './customer/pages/checkout/Checkout';
import Account from './customer/pages/account/Account';

function App() {
  return (
    <div>
      <ThemeProvider theme={customTheme}>
        <div>
          <Navbar />
          {/*<Home />*/}
          {/*<Product />*/}
          {/*<ProductDetails />*/}
          {/*<Review />*/}
          {/*<Cart />*/}
          {/*<Checkout />*/}
          {<Account />}
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;

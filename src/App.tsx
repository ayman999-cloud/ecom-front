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
import { Route, Routes } from 'react-router-dom';
import { Check } from '@mui/icons-material';
import BecomeSeller from './customer/pages/become-seller/BecomeSeller';

function App() {
  return (
    <div>
      <ThemeProvider theme={customTheme}>
        <div>
          {<Navbar />}
          {/*<Home />*/}
          {/*<Product />*/}
          {/*<ProductDetails />*/}
          {/*<Review />*/}
          {/*<Cart />*/}
          {/*<Checkout />*/}
          {/*<Account />*/}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:category" element={<Product />} />
            <Route path="/reviews/:productId" element={<Review />} />
            <Route
              path="/product-details/:categoryId/:name/:productId"
              element={<ProductDetails />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/account/*" element={<Account />} />
            <Route path="/become-seller" element={<BecomeSeller />} />
            <Route path="/seller/*" element={<Account />} />
          </Routes>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;

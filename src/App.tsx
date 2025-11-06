import { Button, ThemeProvider } from '@mui/material';
import './App.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Navbar from './customer/components/navbar/Navbar';
import customTheme from './theme/customTheme';
import Home from './customer/pages/home/Home';
import Product from './customer/pages/product/Product';
import PageDetails from './customer/pages/details/ProductDetails';
import ProductDetails from './customer/pages/details/ProductDetails';

function App() {
  return (
    <div>
      <ThemeProvider theme={customTheme}>
        <div>
          <Navbar />
          {/*<Home />*/}
          {/*<Product />*/}
          <ProductDetails />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;

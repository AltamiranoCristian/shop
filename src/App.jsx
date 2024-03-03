import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from "./components/ProductList"
import Detail from './pages/Detail';
import { CartProvider } from "./contexts/CartProvider"
import Checkout from './pages/Checkout';
import NotFound from './pages/NotFound';

function App() {
  return (
    <CartProvider>
      <Router>
      <Routes>
          <Route path='/' Component={ ProductList }/>
          <Route path='/product/:productId' Component={ Detail }/>
          <Route path='/checkout' Component={ Checkout }/>
          <Route path='*' Component={ NotFound }/>
      </Routes>
    </Router>
    </CartProvider>
  )
}

export default App;
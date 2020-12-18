import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Error from './pages/Error';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login';
import Checkout from './pages/Checkout';
import Cart from './pages/Cart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavigationBarTop from './components/NavigationBarTop';
function App() {
  return (
    <div>
      <Router>
        <NavigationBarTop />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route exact path='/products'>
            <Products />
          </Route>
          <Route
            path='/products/:id'
            children={<ProductDetails></ProductDetails>}
          ></Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route path='/checkout'>
            <Checkout />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

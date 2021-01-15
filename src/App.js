import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Error from './pages/Error';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login';
import Cart from './pages/Cart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavigationBarTop from './components/NavigationBarTop';
import Footer from './components/Footer';
import HelloFromUser from './components/HelloFromUser';
import Alert from './components/Alert';
import PrivateRoute from './components/PrivateRoute';
import StripeCard from './components/cart/StripeCard';
import ScrollButton from './components/ScrollButton';
import ImagePopUp from './components/ImagePopUp';
import Contacts from './pages/Contacts';
function App() {
  return (
    <div>
      <Router>
        <ImagePopUp />
        <Alert />
        <HelloFromUser />
        <NavigationBarTop />
        <ScrollButton />
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
          <Route path='/contacts'>
            <Contacts />
          </Route>
          <PrivateRoute path='/checkout'>
            <StripeCard />
          </PrivateRoute>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

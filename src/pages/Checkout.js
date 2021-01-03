import React, { useContext } from 'react';
import { CartContext } from '../context/cart';
import { UserContext } from '../context/user';
import { useHistory } from 'react-router-dom';
import EmptyCart from '../components/cart/EmptyCart';

const Checkout = () => {
  const { cart, total, clearCart } = useContext(CartContext);
  const { user, hideAlert, showAlert, alert } = useContext(UserContext);
  const history = useHistory();
  //States
  const [name, setName] = React.useState('');
  const [error, setError] = React.useState('');
  const isEmpty = !name || alert.show;

  async function handleSubmit(e) {
    e.preventDefault();
  }
  return cart.length < 1 ? <EmptyCart /> : <div>Checkout</div>;
};

export default Checkout;

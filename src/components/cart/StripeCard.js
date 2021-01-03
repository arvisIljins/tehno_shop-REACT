import React from 'react';
import { StripeProvider, Elements, injectStripe } from 'react-stripe-elements';
import Checkout from '../../pages/Checkout';

const CardInput = injectStripe(Checkout);

const StripeCard = () => {
  return (
    <StripeProvider apiKey='pk_test_51I5YdXFhnjRgMEaiQ274wjIaKGWxKqIp6A8f59owc85WpnYKp0fJz8b2bwSpgkLuzNXBJZRqyH6OhZd4Jz7L4lqJ008z44tBbk'>
      <Elements>
        <CardInput></CardInput>
      </Elements>
    </StripeProvider>
  );
};

export default StripeCard;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ProductProvider from './context/products';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <ProductProvider>
    <App />
  </ProductProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

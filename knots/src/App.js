import React from 'react';
import './app.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Home from './pages/home/home';
import Shop from './pages/shop/shop';
import Product from './pages/product/product';
import Cart from './pages/cart/cart';
import Error from './pages/404/notfound';
import { CartProvider } from './context/cartProvider';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/product/:id" component={Product} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>

      </BrowserRouter>
    </CartProvider>




  );
}

export default App;

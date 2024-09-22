import "./App.css";
import Header from "./common/header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pages from "./pages/Pages";
import Cart from "./common/cart/Cart";
import Data from "./components/Data";
import { useState } from "react";

function App() {
  const { productItems } = Data;
  // const {shopItems} = Sdata;

  const [CartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    const productExists = CartItem.find((item) => item.id === product.id);

    if (productExists) {
      setCartItem(
        CartItem.map((item) =>
          (item.id === product.id
            ? { ...productExists, qty: productExists.qty + 1 }
            : item)
        )
      );
    }
    else{
      setCartItem([...CartItem, { ...product, qty: 1 }]);
    }
  };

  const decreaseQty = (product) => {
    // if hamro product alredy cart xa bhane  find garna help garxa
    const productExists = CartItem.find((item) => item.id === product.id)

    // if product is Exists and its qty is 1 then we will run a fun  setCartItem
    // inside  setCartItem we will run filter to check if item.id is match to product.id
    // if the item.id is doesnt match to product.id then that items are display in cart
    // else
    if (productExists.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      // if product Exists and qty  of that produt is not equal to 1
      // then will run function call setCartItem
      // inside setCartItem we will run map method
      // this map() will check if item.id match to produt.id  then we have to desc the qty of product by 1
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExists, qty: productExists.qty - 1 } : item)))
    }
  }
  return (
    <>
      <Router>
        <Header CartItem={CartItem} />
        <Routes>
          <Route
            path="/pages"
            exact
            element={<Pages productItems={productItems} addToCart={addToCart} />}
          ></Route>
        </Routes>
        <Routes>
          <Route
            path="/Cart"
            exact
            element={
              <Cart
                CartItem={CartItem}
                addToCart={addToCart}
                decreaseQty={decreaseQty}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

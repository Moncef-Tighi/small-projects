import Header from "./components/Header/Header";
import MealsSummary from './components/Meals/MealsSummary'
import Meals from './components/Meals/Meals'
import CartProvider from './state/cartProvider';
import { useContext, useState } from "react";
import Cart from './components/Cart/Cart';

function App() {

  const [visibilty, changeVisibility]=useState(false);

  const showCart = () =>changeVisibility(true);
  
  const hideCart =() => changeVisibility(false);
  return (
    <>
      <CartProvider>
        {visibilty && <Cart onHideCart={hideCart}/>}
        <Header onShowCart={showCart}/>
        <MealsSummary/>
        <main>
          <Meals/>
        </main>
      </CartProvider>
    </>
    );
}

export default App;

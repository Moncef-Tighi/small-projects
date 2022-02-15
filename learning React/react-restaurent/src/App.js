import Header from "./components/Header/Header";
import MealsSummary from './components/Meals/MealsSummary'
import Meals from './components/Meals/Meals'
import CartState from './state/cartState';
import { useContext, useState } from "react";
import Cart from './components/Cart/Cart';

function App() {
  const context = useContext(CartState);
  const [visibilty, changeVisibility]=useState(false);

  const showCart = () =>changeVisibility(true);
  
  const hideCart =() => changeVisibility(false);
  return (
    <>
      <CartState.Provider value={context}>
        {visibilty && <Cart onHideCart={hideCart}/>}
        <Header onShowCart={showCart}/>
        <MealsSummary/>
        <main>
          <Meals/>
        </main>
      </CartState.Provider>
    </>
    );
}

export default App;

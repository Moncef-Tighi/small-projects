import Header from "./components/Header/Header";
import MealsSummary from './components/Meals/MealsSummary'
import Meals from './components/Meals/Meals'
import CartState from './state/cartState';
import { useContext } from "react";

function App() {
  const context = useContext(CartState);
  
  return (
    <>
      <CartState.Provider value={context.cart}>
        <Header/>
        <MealsSummary/>
        <Meals/>
      </CartState.Provider>
    </>
    );
}

export default App;

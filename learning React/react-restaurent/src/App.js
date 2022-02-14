import Header from "./components/Header/Header";
import MealsSummary from './components/Meals/MealsSummary'
import Meals from './components/Meals/Meals'
import CartStateProvider from './state/cartState';

function App() {

  return (
    <>
      <CartStateProvider>
        <Header/>
        <MealsSummary/>
        <Meals/>
      </CartStateProvider>
    </>
    );
}

export default App;

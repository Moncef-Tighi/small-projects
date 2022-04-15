import './App.css';
import Component1 from './Components/Component1';
import Compteur from './Components/Button';
import ShoppingList from './Components/ShoppingList';
import Header from './Components/Header';

function App() {
  const pageTitle = '';
  return (
    <div className="App">
      <Header title={pageTitle}/>
      <ShoppingList/>
      <Component1/>
      <Compteur />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;

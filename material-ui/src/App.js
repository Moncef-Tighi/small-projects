import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import {createTheme,ThemeProvider} from '@mui/material';
import { red, green } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: red,
    secondary: green
  },
});


function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Notes />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;

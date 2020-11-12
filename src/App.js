import {Container} from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites'





function App() {
  return (
    <Container>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/favorites' component={Favorites} />
      </Switch>
    </Container>
  );
}

export default App;

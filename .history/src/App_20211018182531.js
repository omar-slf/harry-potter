import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home/Home';
import { Page } from './components/PageNotFound/Page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path='/' exact components={Home} />
        <Route path='/page' components={Page}
      </Switch>
      </BrowserRouter>
   
    </div>
  );
}

export default App;

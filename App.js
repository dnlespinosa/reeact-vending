import './App.css';

import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Soda from './Soda';
import Sardines from './Sardines';

import { BrowserRouter, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      
            <BrowserRouter>
                <Link exact to='/chips'>CHIPS</Link>
                <Route exact path='/chips'>
                    <Chips />
                </Route>
                <br></br>
                <Link exact to='/soda'>Soda</Link>
                <Route exact path='/soda'>
                    <Soda />
                </Route>
                <br></br>
                <Link exact to='/Sardines'>Sardines</Link>
                <Route exact path='/Sardines'>
                    <Sardines />
                </Route>
                <Route exact path='/'>
                  <VendingMachine />
                </Route>
            </BrowserRouter>
    </div>
  );
}

export default App;

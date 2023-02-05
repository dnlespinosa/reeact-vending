import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import VendingMachine from './VendingMachine';

const Sardines = () => {
    return (
        <div>
        <h1>EWWWWW SARDINES ARE GROSS</h1>

        <br></br>
            <BrowserRouter>
            <Link to='/'>Go Back</Link>
            <Route exact path='/'>
                  <VendingMachine />
                </Route>
            </BrowserRouter>
        </div>
    )
}

export default Sardines
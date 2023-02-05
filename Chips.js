import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import VendingMachine from './VendingMachine';

const Chips = () => {
    return (
        <div>
            <h1>I AM CHIPS</h1>
            <img
            src="https://i.giphy.com/DbD6EnlEQmjTi.gif"
            alt="Diet coke exploding everywhere."
            />
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

export default Chips
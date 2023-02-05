import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import VendingMachine from './VendingMachine';

const Soda = () => {
    return (
        <div>
            <img src='https://media.tenor.com/x7ylyujdzrQAAAAC/coke-can.gif?'></img>
            <h1>mmmmmmm Soda So Good</h1>


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

export default Soda
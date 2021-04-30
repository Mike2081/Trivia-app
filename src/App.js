import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Game from './components/Game.js';
import Start from "./components/Start.js";
import React, { useState, useEffect } from 'react';


const App = () => {
    
    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean')
            .then((response) => response.json())
            .then((data) => console.log(data));
});

    return (
        <Router>
           <Switch>
                <Route path = "/" exact component = {Start}/>
                <Route path ="/game" component = {Game} />
            </Switch>  
        </Router>
    )
}

export default App

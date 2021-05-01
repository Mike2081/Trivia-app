import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Game from './components/Game.js';
import Start from "./components/Start.js";


const App = () => {
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

import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Home from './Home';
import Settings from './Settings';

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/settings" component={Settings} />
            </Switch>
        </div>
    );
}

export default App;


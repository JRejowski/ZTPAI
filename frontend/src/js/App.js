import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Profile  from './Profile';
import Settings from './Settings';

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/settings" component={Settings} />
            </Switch>
        </div>
    );
}

export default App;


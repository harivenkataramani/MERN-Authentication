import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthContainer from '../containers/AuthContainer/AuthContainer'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <h1>My React Webpack App</h1>
                <Switch>
                    <Route exact path="/" component={AuthContainer} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App
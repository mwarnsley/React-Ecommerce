import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'gestalt/dist/gestalt.css';

import App from './components/App';
import Navigation from './components/Navigation';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import Checkout from './components/auth/Checkout';

import registerServiceWorker from './registerServiceWorker';

const Root = () => (
    <Router>
        <Fragment>
            <Navigation />
            <Switch>
                <Route exact component={App} path="/" />
                <Route component={Signin} path="/signin" />
                <Route component={Signup} path="/signup" />
                <Route component={Checkout} path="/checkout" />
            </Switch>
        </Fragment>
    </Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
    module.hot.accept();
}

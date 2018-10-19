import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

// redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
import  rootReducer  from "./reducers";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";

// create redux store -> reducer -> 'actions - actionType || applyMiddleware()
const store = createStore(rootReducer ,composeWithDevTools(applyMiddleware(thunk)));

const Header = () => (
    <nav className = "navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span className="icon-bar"/>
                    <span className="icon-bar"/>
                    <span className="icon-bar"/>
                </button>

                <Link className="navbar-brand" to="/">
                    DIARYHOOD2018
                </Link>
            </div>

            <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/login"> LOGIN </Link></li>
                </ul>
            </div>

        </div>
    </nav>
);

// provide the store to react
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={App} exact={true} />
                    <Route path="/login" component={Login} exact={true} />
                </Switch>
            </div>
        </BrowserRouter> 
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

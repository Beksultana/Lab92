import React from 'react';
import {Route, Switch} from "react-router";
import MainContainer from "./containers/MainContainer/MainContainer";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={MainContainer}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
        </Switch>
    );
};

export default Routes;
import React, {Component, Fragment} from 'react';
import Toolbar from "./components/UI/Toolbar/Toolbar";
import {Container} from "reactstrap";
import {NotificationContainer} from "react-notifications";
import Routes from "./Routes";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {logoutUser} from "./store/actions/usersActions";

class App extends Component{

    render() {
        return (
            <Fragment>
                <NotificationContainer/>
                <header>
                    <Toolbar user={this.props.user} logout={this.props.logoutUser}/>
                </header>
                <Container>
                    <Routes/>
                </Container>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    user: state.users.user
});
const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser())
});

export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

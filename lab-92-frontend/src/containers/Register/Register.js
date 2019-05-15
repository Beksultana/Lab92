import React, {Component} from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";
import './Register.css';
import {registerUser} from "../../store/actions/usersActions";
import {connect} from "react-redux";

class Register extends Component {

    state = {
        username: '',
        password: ''
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    submitOnHandler = event => {
        event.preventDefault();

        this.props.registerUser({...this.state});
    };

    render() {
        return (
            <div className="FormBlock">
                <Form onSubmit={this.submitOnHandler}>
                    <FormGroup row>
                        <Label for="username" sm={2}>Username</Label>
                        <Col sm={10}>
                            <Input
                                type="text"
                                name="username"
                                id="username"
                                value={this.state.username}
                                onChange={this.inputChangeHandler}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="password" sm={2}>Password</Label>
                        <Col sm={10}>
                            <Input
                                type="password"
                                name="password"
                                id="password"
                                value={this.state.password}
                                onChange={this.inputChangeHandler}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup check row>
                        <Col sm={{ size: 10, offset: 2 }}>
                            <Button type="submit" color="primary">Send</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    error: state.users.registerError,
});

const mapDispatchToProps = dispatch => ({
    registerUser: userData => dispatch(registerUser(userData))
});
export default connect(null, mapDispatchToProps)(Register);
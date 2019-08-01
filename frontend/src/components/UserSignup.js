import React from 'react';
import {Button, Form, FormControl, FormGroup} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';

import { Header } from '../components/Header'
import { Footer } from '../components/Footer';



class UserSignup extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        };
    }

    validateForm() {
        return (
            this.state.firstName.length > 0 &&
            this.state.lastName.length > 0 &&
            this.state.email.length > 0 &&
            this.state.password.length > 0 &&
            this.state.password === this.state.confirmPassword
        );
    }

    validateConfirmationForm() {
        return this.state.confirmationCode.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = async event => {
        event.preventDefault();


        let user = {
            username: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName
        };
        this.props.onSubmit(user);
    }


    render() {
        return (
            <div className='card justify-content-center'>
                <Header/>
                <div className='login-container card-body d-flex justify-content-center'>
                    <form onSubmit={this.handleSubmit} className='border pt-3 pb-3 pr-5 pl-5'>
                        <FormGroup controlId="firstName" bsSize="large">
                            <Form.Label>Name</Form.Label>
                            <FormControl
                                autoFocus
                                type="text"
                                value={this.state.firstName}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup controlId="lastName" bsSize="large">
                            <Form.Label>Surname</Form.Label>
                            <FormControl
                                autoFocus
                                type="text"
                                value={this.state.lastName}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup controlId="email" bsSize="large">
                            <Form.Label>Email address</Form.Label>
                            <FormControl
                                autoFocus
                                type="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup controlId="password" bsSize="large">
                            <Form.Label>Password</Form.Label>
                            <FormControl
                                value={this.state.password}
                                onChange={this.handleChange}
                                type="password"
                            />
                        </FormGroup>
                        <FormGroup controlId="confirmPassword" bsSize="large">
                            <Form.Label>Confirm Password</Form.Label>
                            <FormControl
                                value={this.state.confirmPassword}
                                onChange={this.handleChange}
                                type="password"
                            />
                        </FormGroup>
                        <Button
                            block
                            bsSize="large"
                            disabled={!this.validateForm()}
                            type="submit"
                        >
                            Sign Up
                        </Button>
                        <Link to={'/login'} className="d-flex justify-content-center">Already have an account?</Link>
                        <Form.Text className="text-muted text-center mt-2">
                            We'll never share your data with anyone else.
                        </Form.Text>
                    </form>
                </div>
                <Footer/>
            </div>
        );
    }
};

export default withRouter(UserSignup);

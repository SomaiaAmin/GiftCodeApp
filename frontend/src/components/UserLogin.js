import React from 'react';
import { Form, FormGroup, Button, FormControl } from 'react-bootstrap';
import { withRouter, Link } from 'react-router-dom';

import { AlertMessage } from './AlertMessage';
import { Header } from '../components/Header'
import { Footer } from '../components/Footer';




class UserLogin extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email : '',
            password : ''
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        let user = {
            username: this.state.email,
            password: this.state.password
        };

        this.props.onSubmit(user);
    }

    render() {
        return (
            <div className='card justify-content-center'>
              <Header/>
                <div className='login-container card-body d-flex justify-content-center'>
                    <form onSubmit={this.handleSubmit} className='border p-5'>
                        <FormGroup controlId="email" bsSize="large">
                            <Form.Label>Email address</Form.Label>
                            <FormControl
                                autoFocus
                                type="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </FormGroup>
                        <FormGroup controlId="password" bsSize="large">
                            <Form.Label>Password</Form.Label>
                            <FormControl
                                value={this.state.password}
                                onChange={this.handleChange}
                                type="password"
                            />
                        </FormGroup>
                        <AlertMessage className="md-row md-full-width" >{this.props.error ? `${this.props.error}` : ''}</AlertMessage>
                        <Button
                            block
                            bsSize="large"
                            disabled={!this.validateForm()}
                            type="submit"
                        >
                            Login
                        </Button>
                        <Link to={'/register'} className="d-flex justify-content-center">Not registered yet?</Link>
                    </form>
                </div>
                <Footer/>
            </div>
        );
    }
};

export default withRouter(UserLogin);

import React from 'react';
import { Link } from 'react-router-dom'
import Navigator from './Navigator';
import logo from '../images/giftcode-logo.png'
import CartLogo from 'react-ionicons/lib/IosCart'
import UserService from '../services/UserService';
import { SimpleLink } from './SimpleLink';
import ShoppingCartService from '../services/ShoppingCartService'

export class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentUser: 'Login',
            count: [],
            loading: false
        };
    }

    componentWillMount() {
        this.setState({
            loading: true,

        });
        let id = UserService.getCurrentUser().id;
        if (id) {
            ShoppingCartService.getProductCount(id).then((data) => {
                this.setState({
                    count: data

                });
            }).catch((e) => {
                console.error(e);
            });
            if (UserService.getCurrentUser().firstName !== undefined) {
                this.setState({
                    currentUser: UserService.getCurrentUser().firstName + ' ' + UserService.getCurrentUser().lastName
                });
            } else {
                this.setState({currentUser: 'Login'});
            }
        }
    }

    routeChange() {
        window.location.hash = "/cart";
    }



    logout() {
        this.setState({currentUser: 'Login'})
        UserService.logout();
        window.location.hash = '/login'
    }

    renderWithUser() {
            let cartcount;
            if(UserService.getCurrentUser().id){
                cartcount=this.state.count.count
            }
            else{
                cartcount=0

            }

        return (
            <div className="d-flex align-middle border-bottom" style={headerStyle}>
                <div className="mr-auto">
                    <Link to={``}><img src={logo} alt="Logo" style={{height: 100, paddingLeft: '1rem'}}/></Link>
                </div>
                <div className="ml-auto mr-auto mt-auto mb-auto">
                    <Navigator />
                </div>
                <div className="ml-auto mt-auto mb-auto pr-5">
                    <button className='btn btn-outline-secondary' onClick={this.routeChange}>
                        <CartLogo />
                        {cartcount}
                    </button>
                </div>
                <div className="mt-auto mb-auto pr-5">
                    <a className='text-dark'>
                        <SimpleLink style={{fontSize: 16}} to={`/account`}>{this.state.currentUser}</SimpleLink>
                    </a>
                    <br/>
                    <small className='d-flex justify-content-center text-dark mt-2'>
                    <button className='btn btn-secondary ml-auto mr-auto' style={{fontSize:12}} onClick={this.logout.bind(this)}>Logout</button>
                    </small>
                </div>
            </div>
        );
    }

    renderWithoutUser() {
            let cartcount;
            if(UserService.getCurrentUser().id){
                cartcount=this.state.count.count
            }
            else{
                cartcount=0

            }

        return (
            <div className="d-flex align-middle border-bottom" style={headerStyle}>
                <div className="mr-auto">
                    <Link to={``}><img src={logo} alt="Logo" style={{height: 100, paddingLeft: '1rem'}}/></Link>
                </div>
                <div className="ml-auto mr-auto mt-auto mb-auto">
                    <Navigator />
                </div>
                <div className="ml-auto mt-auto mb-auto pr-5">
                    <button className='btn btn-outline-secondary' onClick={this.routeChange}>
                        <CartLogo />
                        {cartcount}
                    </button>
                </div>
                <div className="mt-auto mb-auto pr-5">
                  <p><SimpleLink to={`/login`}>{this.state.currentUser}</SimpleLink></p>
                </div>

            </div>
        );
    }

    render() {
        if (this.state.currentUser === 'Login') {
            return (
                <div>
                    {this.renderWithoutUser()}
                </div>
            )
        } else {
            return (
                <div>
                    {this.renderWithUser()}
                </div>
            )
        }

    }


};

const headerStyle = {
    background: '#ebf1fd',
    display: 'flex'
};

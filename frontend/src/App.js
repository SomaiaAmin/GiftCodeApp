import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { ProductListView } from './views/ProductListView'
import { ProductDetailView } from './views/ProductDetailView'
import  ReviewView  from './views/ReviewView'
import ShoppingCartView from './views/ShoppingCartView'
import { PaymentView } from './views/PaymentView'
import  PaypalPaymentView  from './views/PaypalPaymentView'
import { UserLoginView } from "./views/UserLoginView";
import { UserSignupView } from "./views/UserSignupView";
import SendGiftView from './views/SendGiftView';
import OrderView from './views/OrderView';
import OrderPreviewView from './views/OrderPreviewView';
import AboutView from './views/AboutView';
import HelpView from './views/HelpView';
import AccountView from './views/AccountView';


export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: 'GiftCode',
            routes: [

                { component: ProductListView , path: '/', exact: true },
                { component: ProductDetailView , path: '/detail/:id', exact: true },
                { component: ReviewView , path: '/reviews/:id', exact: true },
                { component: PaymentView , path: '/pay', exact: true },
                { component: PaypalPaymentView , path: '/paypal-payment', exact: true },
                { component: ShoppingCartView , path: '/cart', exact: true },
                { component: UserLoginView, path: '/login', exact: true },
                { component: UserSignupView, path: '/register', exact: true },
                { component: SendGiftView, path: '/send/:order_id', exact: true },
                { component: OrderView, path: '/order/:order_id', exact: true },
                { component: OrderPreviewView, path: '/orderpreview/:order_id', exact: true },
                { component: AboutView, path: '/about', exact: true },
                { component: HelpView, path: '/help', exact: true },
                { component: AccountView, path: '/account', exact: true }


            ]
        }
    }

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        {this.state.routes.map((route, i) => (<Route key={i} {...route}/>) )}
                    </Switch>
                </Router>
            </div>
        );
    }
}

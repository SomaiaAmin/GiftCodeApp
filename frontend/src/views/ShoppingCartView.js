import React from 'react';
import ShoppingCartService from '../services/ShoppingCartService';
import UserService from '../services/UserService';
import { Header } from '../components/Header'
import { Footer } from '../components/Footer';
import CartList from '../components/CartList'
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const routeChange = () => {
    window.location.hash = "/";
}


export default class ShoppingCartView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],
            sub_total: 0

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleProceedCheckout = this.handleProceedCheckout.bind(this);
    }

    componentWillMount(){
        this.setState({
            loading: true
        });

        let user_id = UserService.getCurrentUser().id;

        ShoppingCartService.getToPurchaseProducts(user_id).then((cartProducts) => {

            this.setState({
                data: cartProducts,
                loading: false,
                sub_total: this.calculateTotal(cartProducts)

            });
        }).catch((e) => {
            console.error(e);
        });
    }

    calculateTotal(products){
        let sum = 0;
        products.forEach(product => {
            sum += (product.productQuantity * product.productAmount)
        });
        return sum;
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleProceedCheckout(){
      if(this.state.sub_total!==0){
        window.location.hash = "/pay";
      }
      else{
        window.confirm('Please add items to your cart!');
      }

    }

    render() {

        return (
            <div>
                <Header/>
                <div className='d-flex justify-content-around ml-3 mr-3 mt-3' style={{backgroundColor: '#dbdbdb', height: 100}}>
                    <div>
                        <h4 className='pt-4 text-dark font-italic'>1. Shopping Cart</h4>
                        <hr style={{backgroundColor: '#BF4193'}}/>
                    </div>
                    <div>
                        <h4 className='pt-4 text-secondary font-italic'>2. Payment</h4>
                        <hr/>
                    </div>
                    <div>
                        <h4 className='pt-4 text-secondary font-italic'>3. Sending Options</h4>
                        <hr/>
                    </div>
                </div>
                <Paper>
                    <Table style={{width: 1300}}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="middle" style={{width: 700}}>Products</TableCell>
                                <TableCell align="middle" style={{width: 200}}>Price</TableCell>
                                <TableCell align="middle" style={{width: 200}}>Quantity</TableCell>
                                <TableCell align="middle" style={{width: 200}}>Total</TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </Paper>
                <div className='container2'>
                    <CartList products={this.state.data}/>
                </div>
                <h1 className='d-flex justify-content-left text-secondary' style={{marginTop: 20, marginLeft: 1100, fontSize: 24}}>Order Total: {this.state.sub_total} &#8364;</h1>
                <button className='btn btn-outline' style={{marginTop: 10, marginLeft: 20, fontSize: 16, backgroundColor: '#9E9B9D', color: 'white'}} onClick={routeChange}>Back to Browse</button>
                <button className='btn btn-outline' style={{marginTop: 10, marginLeft: 940, fontSize: 16, backgroundColor: '#BF4193', color: 'white'}} onClick={this.handleProceedCheckout}>Proceed to Checkout</button>
                <hr />
                <Footer/>
            </div>
        );
    }

};

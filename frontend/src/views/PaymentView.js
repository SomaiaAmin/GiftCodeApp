import React from 'react';
import { Header } from '../components/Header'
import { Footer } from '../components/Footer';
import PaypalButton from '../components/PaypalButton';
import  OrderService  from '../services/OrderService';
import  UserService  from '../services/UserService';
import  PurchasedProductService  from '../services/PurchasedProductService';
import  ShoppingCartService  from '../services/ShoppingCartService';
import  PaymentService  from '../services/PaymentService';
import  CreditCard  from '../components/CreditCard';
import { Grid } from 'semantic-ui-react' ;
import PaymentList from '../components/PaymentList'


const CLIENT = {
    sandbox: process.env.REACT_APP_PAYPAL_CLIENT_ID_SANDBOX,
    production: process.env.REACT_APP_PAYPAL_CLIENT_ID_PRODUCTION,
  };

const ENV = process.env.NODE_ENV === 'production'
  ? 'production'
  : 'sandbox';

export class PaymentView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id : UserService.getCurrentUser().id,
            sum: 0.0,
            currency: "EUR",
            products: []

        }

    }
   
    componentWillMount(props){
        this.setState({
            loading: true,
            
        });

   

    ShoppingCartService.getToPurchaseProducts(this.state.user_id).then((data) => {
        this.setState({
            products: data,
            loading: false,
            sum: this.calculateTotal(data)

        });
      
        console.log(this.state.products);
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
   
    render() {
        
        const onSuccess = (payment) =>{
            console.log('Successful payment!', payment);
            let user_id = UserService.getCurrentUser().id;
            let order = {user_id: user_id, sum: 60.0, currency: 'EUR' }
            //SHOW Message your payment was successful, proceed to send!
            //save order in the database
            var createOrderPromise = OrderService.createOrder(order);
            createOrderPromise.then(function(details){ 
              let order_id = details._id;
              //save the payment insance
              let paymentOrder = {user_id: user_id, order_id: order_id, payer_id: payment.payerID, payment_id: payment.paymentID, payment_token: payment.paymentToken, method: "paypal"}
              
              PaymentService.createPrayment(paymentOrder)
              //move products from cart to purchased products list
              PurchasedProductService.moveProductsFromCartToPurchasedList(user_id, order_id);

              //move to sending page and send order_id
                window.location.hash = `/send/${order_id}` ;

          })
            
            
          }
          const onError = (error) =>{
            console.log('Erroneous payment OR failed to load script!', error);
            //TODO show ERROR PAGE
            window.alert("Error in Payment, please try again later!");
            window.location.hash = `/pay/` ;
          }
          const onCancel = (data) =>{
            console.log('Cancelled payment!', data);
            window.alert("Payment is canceled!");
            window.location.hash = `/pay/` ;
          }
        return (
            <div>
            <Header/>
                <div className='d-flex justify-content-around ml-3 mr-3 mt-3' style={{backgroundColor: '#dbdbdb', height: 100}}>
                    <div>
                        <h4 className='pt-4 text-secondary font-italic'>1. Shopping Cart</h4>
                        <hr/>
                    </div>
                    <div>
                        <h4 className='text-dark pt-4 text-secondary font-italic'>2. Payment</h4>
                        <hr style={{backgroundColor: '#BF4193'}}/>
                    </div>
                    <div>
                        <h4 className='pt-4 text-secondary font-italic'>3. Sending Options</h4>
                        <hr/>
                    </div>
                </div>

            <Grid celled >
                <Grid.Row columns={3} divided>
                    <Grid.Column>
                        <div>
                            <h2 className='d-flex justify-content-left text-secondary' style={{fontSize: 20, marginLeft: 70, marginTop: 40}}>Payment Methods</h2>
                            <hr style={{ marginLeft:70, marginRight: 120}}/>
                            <h2 className='d-flex justify-content-center text-secondary' style={{fontSize: 14, marginRight: 300, marginLeft: 70}}>How would you like to pay for your gift?</h2>
                           
                            <div style={{fontSize: 14, marginTop:10, marginLeft: 70,width:500,height:300,backgroundColor:'#f0f0f0',padding:10,border:''}}>
                            <div style={{fontSize:24,marginBottom:15}}>PayPal</div>

                            <PaypalButton 
                            client={CLIENT}
                            env={ENV}
                            commit={true}
                            currency={this.state.currency}
                            total={this.state.sum}
                            onSuccess={onSuccess}
                            onError={onError}
                            onCancel={onCancel}
                            />
                        </div>
                        <div style={{marginLeft:70,marginTop:20}}>
                            <CreditCard/>
                        </div>
                        </div>
                    </Grid.Column>
                    <Grid.Column style={{marginLeft: 100}}>
                        <h2 className='d-flex justify-content-left text-secondary' style={{fontSize: 20, marginRight: 300, marginTop: 40}}>Summary</h2>
                        <hr/>
                        <div>
                        <Grid.Row columns={3} divided>
                        <Grid.Column style={{width: 100}}></Grid.Column>
                            <Grid.Column style={{width: 100, marginLeft: 50}}>Name</Grid.Column>
                            <Grid.Column style={{width: 100, marginLeft: 50}}>Quantity</Grid.Column>
                            <Grid.Column style={{width: 100, marginLeft: 50}}>Price </Grid.Column>
                        </Grid.Row>
                        <hr/>
                        <PaymentList products={this.state.products}/>
                        <hr/>
                        <Grid.Row >
                        <div  style = {{fontSize: 20,alignItems:"right",textAlign:'right',marginLeft:400}}>
                        Sum: {this.state.sum} €
                        </div>
                        </Grid.Row>
                        </div>
                        <hr/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row >
                <Grid.Column>
                </Grid.Column>
                </Grid.Row>
            </Grid>
            <hr/>
    <Footer/>
        </div>
        );
    }
};

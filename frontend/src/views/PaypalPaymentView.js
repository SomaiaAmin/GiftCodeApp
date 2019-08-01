import React from 'react';
import PaypalButton from '../components/PaypalButton';
import  OrderService  from '../services/OrderService';
import  UserService  from '../services/UserService';
import  PurchasedProductService  from '../services/PurchasedProductService';

const CLIENT = {
    sandbox: process.env.REACT_APP_PAYPAL_CLIENT_ID_SANDBOX,
    production: process.env.REACT_APP_PAYPAL_CLIENT_ID_PRODUCTION,
  };

const ENV = process.env.NODE_ENV === 'production'
  ? 'production'
  : 'sandbox';

class PaypalPayment extends React.Component {
  render() {
    const onSuccess = (payment) =>{
      console.log('Successful payment!', payment);
      let user_id = UserService.getCurrentUser().id;
      let order = {user_id: user_id, sum: 60.0, currency: 'Euro', list_products: [], order_status: 'Purchased' }
      //SHOW Message your payment was successful, proceed to send!
      //save order in the database
      var createOrderPromise = OrderService.createOrder(order);
      createOrderPromise.then(function(details){ 
        console.log("order details : ", details);
        let order_id = details._id;
        //move products from cart to purchased products list
        PurchasedProductService.moveProductsFromCartToPurchasedList(user_id, order_id);
    })
      
      
    }
    const onError = (error) => {
      console.log('Erroneous payment OR failed to load script!', error);
      //TODO show ERROR PAGE
    }

    const onCancel = (data) => {
      console.log('Cancelled payment!', data);
    }
      // show cancelation page
      //remove products from to purchase products
    return (
      <div>
        <PaypalButton
          client={CLIENT}
          env={ENV}
          commit={true}
          currency={'USD'}
          total={100}
          onSuccess={onSuccess}
          onError={onError}
          onCancel={onCancel}
        />
      </div>
    );
  }
}

export default PaypalPayment;

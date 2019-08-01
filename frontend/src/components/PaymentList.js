import React from 'react';
import PaymentItem from './PaymentItem';


const PaymentList = ({ products }) => {
  const paymentArray = products.map((user, i) => {
    return <PaymentItem img = {products[i].img} name={products[i].productName} quantity={products[i].productQuantity} amount={products[i].productAmount} />
  })
  return (
    <div>
      {paymentArray}
    </div>
  );
}

export default PaymentList;

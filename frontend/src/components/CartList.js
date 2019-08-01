import React from 'react';
import CartItem from './CartItem';

const CartList = ({ products }) => {
  const cartArray = products.map((user, i) => {
    return <CartItem product={products[i]} key={products[i].user_id} id={products[i].product_id} name={products[i].productName} quantity={products[i].productQuantity}  product_amount={products[i].productAmount} supplier={products[i].supplier} img={products[i].img} />
  })
  return (
    <div>
      {cartArray}
    </div>
  );
}

export default CartList;

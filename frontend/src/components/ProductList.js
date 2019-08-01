import React from 'react';
import Product from './Product';

const ProductList = ({ products }) => {
  const productsArray = products.map((user, i) => {
    return <Product key={products[i]._id} _id={products[i]._id} name={products[i].name}
                    description={products[i].description} supplier={products[i].supplier}
                    price={products[i].price} img={products[i].img} rating={products[i].rating} reviewCount={products[i].reviewCount} isCard={products[i].isCard}/>
  })
  return (
    <div>
      {productsArray}
    </div>
  );
}


export default ProductList;

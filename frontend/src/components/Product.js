import React from 'react';

import { SimpleLink } from './SimpleLink';
import StarRatings from "react-star-ratings";

const Product = (props) => {
if(!props.isCard){
  return (
    <div className='pl-5'>
      <div className='d-flex'>
        <img src={props.img} alt="Logo" style={{height: 100}}/>
        <div className='ml-5 w-50'>
          <h4><SimpleLink to={`/detail/${props._id}`}>{props.name}</SimpleLink></h4>
          <p className='font-italic text-dark' style={{fontSize: 18}}> ({props.supplier})</p>
          <p>{props.description}</p>
          <p style={{marginTop: 0}}>{props.price} &#8364;</p>
        </div>
        <div className='ml-auto mr-auto'>
          <StarRatings
              rating={props.rating}
              starDimension="16px"
              starSpacing="4px"
              starRatedColor='gold'
          />
          <div className='text-center'>
            <small>{props.reviewCount} reviews</small>
          </div>
        </div>
      </div>
    <hr/>
    </div>
  );
}
else{
  return (
    <div className='pl-5'>
      <div className='d-flex'>
        <img src={props.img} alt="Logo" style={{height: 100}}/>
        <div className='ml-5 w-50'>
          <h4><SimpleLink to={`/detail/${props._id}`}>{props.name}</SimpleLink></h4>
          <p className='font-italic text-dark' style={{fontSize: 18}}> ({props.supplier})</p>
          <p>{props.description}</p>
          <p style={{marginTop: 0}}></p>
        </div>
        <div className='ml-auto mr-auto'>
          <StarRatings
              rating={props.rating}
              starDimension="16px"
              starSpacing="4px"
              starRatedColor='gold'
          />
          <div className='text-center'>
            <small>{props.reviewCount} reviews</small>
          </div>
        </div>
      </div>
    <hr/>
    </div>
  );
}
}

export default Product;

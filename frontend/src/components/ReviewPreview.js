import React from "react";
import Review from '../components/Review';

import { Link } from 'react-router-dom'

export default class ReviewPreview extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            review: ' ',
            product_id:this.props.product_reviews.product_id,
            user_id:'',
            username:'',
            rating:0,
            review_count:0,
            review_avg:0,
        };
        this.review_el = this.review_el.bind(this);
        this.seeMoreHandle= this.seeMoreHandle.bind(this);
    }
   review_el(i) {
        if(this.props.product_reviews[i]){
            return (

  <div>
   <Review key={i} review={this.props.product_reviews[i].review} rating={this.props.product_reviews[i].rating}date={this.props.product_reviews[i].date} username={this.props.product_reviews[i].username}/>
  </div>
  );
        }
        else {
            return (<div></div>)
            ;
        }
 
  }
  seeMoreHandle(event) {

}
    render() {

        return (
            <div style={{ marginLeft: 50, marginRight: 50,  marginTop: 50,background:"white"}} >
            <h2>Reviews</h2>

            <div style={{marginLeft:10,marginRight:10,allign:'center',flexDirection:'column',display:'flex' }} >
            <div>{this.review_el(0)}</div>
            <div>{this.review_el(1)}</div>
                        </div>
                        <div className='d-flex justify-content-center' >
            <button style={ButtonStyle} onClick={this.handleSubmit} onKeyPress={this.handleSubmit}>
            &nbsp; <Link to={`/reviews/${this.props.prod_id}`}>See More..</Link>
            </button> 
            </div>      
            </div>
        ); 
    }
}

const ButtonStyle = {
    background: "#0000",
    fontSize:17,
    color: 'black',
    textAllign: 'center',
    position:'center',
    marginBottom:20,
    width:200,
};

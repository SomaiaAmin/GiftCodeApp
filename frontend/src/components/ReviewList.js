import React from "react";
import StarRatings from "react-star-ratings";
import { Grid } from 'semantic-ui-react'
import Review from '../components/Review';
import ReviewService from '../services/ReviewService';
import UserService from '../services/UserService';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Pagination } from "./Pagination";

export default class ReviewList extends React.Component {

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
        this.handleReview = this.handleReview.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeRating = this.changeRating.bind(this);
        this.handleName = this.handleName.bind(this);

    }
    changeRating( newRating, name ) {
      this.setState({
        rating: newRating
      });
    }
    handleReview(event) {
        this.setState({review: event.target.value}); 
     }
  handleName(value) {
    this.setState(Object.assign({}, this.state, {username: value}));
}

    handleSubmit(event) {
      event.preventDefault();
      if(this.props.purchased==='true'){
      var today = new Date(),
      date = today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear();
      let user_review = {
          review: this.state.review,
          product_id:this.props.prod_id,
          user_id:UserService.getCurrentUser().id,
          username:UserService.getCurrentUser().firstName + ' ' + UserService.getCurrentUser().lastName,
          rating:this.state.rating,
          date: date.toString(),
        
      };
      ReviewService.createReview(user_review).then((data) => {
      }).catch((e) => {
          console.error("problem with creating a review");
      })
      this.setState({
        rating: 0,
        username:'',
        review:''
      });
      window.alert('Your review has been submitted!')
      window.location.reload();
    }
    else if(this.props.purchased==='false'){
      window.alert('You cannot make a review without purchasing the product first!')
      this.setState({
        rating: 0,
        username:'',
        review:''
      });

    }
    else {
      window.alert('You should be logged in first!')
      this.setState({
        rating: 0,
        username:'',
        review:''
      });
    }
  }
    render() {
      var total=0;
        const reviewArr = this.props.product_reviews.map((user, i) => {
          total=total + this.props.product_reviews[i].rating;
          return <Review key={this.props.product_reviews[i].id} review={this.props.product_reviews[i].review} rating={this.props.product_reviews[i].rating} date={this.props.product_reviews[i].date} username={this.props.product_reviews[i].username}/>
        })


        return (

            <div style={{ marginLeft: '1rem', marginRight: 20, marginTop: 50,background:"white",'overflow-x':'scroll' }} >
            <Breadcrumb style={{ background: "white" }}>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="http://localhost:3001/#/">
                        Gifts
                        </Breadcrumb.Item>
                    <Breadcrumb.Item href={"http://localhost:3001/#/detail/"+this.props.prod_id}>
                     {this.props.product.name}
                     </Breadcrumb.Item>                    
                    <Breadcrumb.Item active>Reviews</Breadcrumb.Item>

            </Breadcrumb>
            <div style={{marginLeft:50,display:'flex',flexDirection:'row'}}>
            <div style={{ justifyContent: 'left' }}> {/*image?gift*/}
            <img src={this.props.product.img} alt="Gift" style={{ height: 250, marginLeft: '1rem', marginRight: 50 }} />
        </div>{/*image?gift*/}
        <div>
            <h2>
            {this.props.product.name}

        </h2>
        <div style={textStyle}>
            <StarRatings
                rating={this.props.product.rating? this.props.product.rating:1}
                starDimension="18px"
                starSpacing="4px"
                starRatedColor='gold'
            />
            <div style={{ marginTop: 0, marginLeft: 5, fontSize: 17 }}>
                {this.props.product.reviewCount} reviews
           </div>
          </div> 
        
        <div style={{marginTop:10}} >
           {/*<h2>Add a review</h2>*/} 
            <Grid style={commentStyle} >
                <input
                  style={inputStyle}
                  id="ReviewField"
                  type="text"
                  required={true}
                  value={this.state.review}
                  onChange={this.handleReview}
                />
                  <StarRatings
                    rating={this.state.rating}
                    starRatedColor="gold"
                    changeRating={this.changeRating}
                    numberOfStars={5}
                    starDimension="18px"
                    starSpacing="4px"
                    name='rating'
                  />
                  <button style={ButtonStyle} onClick={this.handleSubmit} >
                    &nbsp; Submit
         
         </button>
            </Grid>
            </div>
            </div>
            </div>
            <div style={{ maxWidth: 800,marginLeft:60,marginTop:20,marginRight:10,allign:'center', }} >
            <h1>Reviews</h1>
            </div>
            <div style={{marginLeft:60}}>
            <Pagination list={reviewArr} itemCount={4}></Pagination>
            </div>
            </div>
          
        ); 
    }
}


const textStyle = {
    background: "#00000",
    fontSize:12,
    display: "flex",
    'justify-content': 'flex-start',
    'flex-wrap': 'nowrap',

    'flex-direction':'row',
};
const commentStyle = {
    background: "#F5FCFF",
    fontSize:20,
    'flex-direction':'row',
    paddingRight:10
};
const inputStyle = {
    background: "#00000",
    minwidth:400,
    marginTop:10,
    height:150,
    width:350,
marginLeft:20,
    marginBottom:10,
    marginRight:20,
    paddingTop:5


};
const ButtonStyle = {
    backgroundColor: "white",
    fontSize:17,
    color: 'black',
    textAllign: 'center',
    marginLeft:20,
    width:100,


};

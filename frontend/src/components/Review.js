import React from "react";
import StarRatings from "react-star-ratings";
import user from '../images/user.png'

const Review = (props) => {
    return (
      <div>
      <div style={{flexDirection:'row',display:'flex'}}>
      <div>
      <img src={user} alt="Logo" style={{height: 65, paddingLeft: '1rem',marginTop:15}}/>
      </div>
        <div >
          <div style={{marginLeft: '3rem',width:200}}>

            <div>{props.username}</div>
            <div>{props.date}</div>
            <div>      
            <StarRatings
            rating={props.rating}
            starDimension="18px"
            starSpacing="4px"
            starRatedColor='gold'
        />
        </div>
          </div>

        </div>
        <div>
        <p style={{marginTop: 10}}>{props.review} </p>

        </div>
      </div>
      <hr ></hr>

      </div>
    );
  }
  export default Review;

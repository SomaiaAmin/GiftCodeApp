import React from 'react';
import StarRatings from "react-star-ratings";
import { Link } from 'react-router-dom'
	
export default class OtherGifts extends React.Component {
    constructor(props) {
        super(props);
        this.updatefunc = this.updatefunc.bind(this);
    }
    updatefunc() {
        var link = window.location.href;
        window.location.assign(`localhost:3001/#/detail/${this.props.id}`);
       this.forceUpdate();

    }
    render(){
        const { history } = this.props;
    return (
        <div style={gridStyle} >
            <div align='center'>
            <img src={this.props.img} alt="Logo" style={{width: 190}}/>
            </div>
            <div align='center'>

           { <a 
            onClick={() => { window.location.reload()} }>
            <Link to={`/detail/${this.props.id}`}   onClick={this.updatefunc}>
            {this.props.name} </Link>             
             </a>  }
            </div>
            <div align='center'>
                <StarRatings
                    rating={this.props.rating}
                    starDimension="16px"
                    starSpacing="4px"
                    starRatedColor='gold'
                />
                <div align='center'>
                {this.props.price}  €          
                </div>
            </div>
        </div>
    );
}
}

const gridStyle = {
    allign:'center'
};

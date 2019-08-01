import React from "react";
import OtherGiftItem from '../components/OtherGiftItem';

export default class OtherGifts extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
        };
        this.forceUpdate = this.forceUpdate.bind(this);
    }
    forceUpdate(newlink) {
        var link = window.location.href;
        window.location.replace(link);
    }

    render() {
        for (var i = 0; i < this.props.gifts.length; i++) {
            if (this.props.gifts[i].id == this.props.id) {
                this.props.gifts.splice(i, 1);
            }
          }
              const productArr = this.props.gifts.map((user, i) => {
                  
                    return <OtherGiftItem key={this.props.gifts[i].id} id={this.props.gifts[i]._id} name={this.props.gifts[i].name} img={this.props.gifts[i].img} rating={this.props.gifts[i].rating} price={this.props.gifts[i].price}/>
                
          })
        var randomItem = productArr[Math.floor(Math.random()*this.props.gifts.length)];        

        return (
            <div style={{ marginLeft: 50, marginBottom: 50,marginRight: 20, marginTop: 20,background:"white",justifyContent:'flex-start'}} >
           <h2>Other Products </h2>
            <div style={{display:'flex',flexDirection:'row',allign:'flex',marginTop:10}}>
            <div style={gridStyle} >{productArr[0]}</div>
            <div style={{borderLeft:'1px double lightgrey',marginRight:30,marginLeft:30}}></div>
            <div style={gridStyle}>{productArr[1]}</div>
            <div style={{borderLeft:'1px solid lightgrey',marginRight:30,marginLeft:30}}></div>
            <div style={gridStyle}>{productArr[2]}</div>
            <div style={{borderLeft:'1px solid lightgrey',marginRight:30,marginLeft:30}}></div>
            <div style={gridStyle}>{productArr[3]}</div>

             </div>
             <hr></hr>
            </div>
        ); 
    }
}

const gridStyle = {
    maxWidth:250,
    
};

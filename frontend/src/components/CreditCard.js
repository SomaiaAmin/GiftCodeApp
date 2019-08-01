import React from "react";
import { Grid, Icon,Input} from 'semantic-ui-react'

export default class CreditCard extends React.Component {

    constructor(props) {
        super(props);

    this.state = {
        cardNumber: '',
        expiry:'',
        cvc:'',
        count: [],
    };
    }

    render() {
            return (
                <div style={{marginLeft:0,border:'1px double lightgrey',width:500,padding:30,backgroundColor:'#f0f0f0',paddingRight:30}}>
                <div style={{fontSize:24,marginBottom:15}}>Credit Card</div>
                <div style={{display:'flex',flexDirection:'row',marginBottom:30}}>
                
                <div  style={{marginRight:30}} >
                <Icon disabled color='black' name='angle right'/>
                <input type="number" placeholder=" 4439   4345   1202  2443" style={{width:215}}/>
              </div>
                <div>
                <Icon></Icon>
                <input type="text" placeholder="  MM / YY " style={{width:90}}/>
                <i class="search icon"></i>
                </div>
                <div style={{marginLeft:30}}>  
                <Icon></Icon>
                <input type="number" placeholder="  CVV " style={{width:60}}/>
                <i class="search icon"></i>
                </div>
                </div>
                <div>
                <Icon></Icon>
                <input type="text" placeholder="  Card Holder Name " style={{width:425}}/>
                <i class="search icon"></i>                
                </div>
                <div>
                <div style={{backgroundColor:'#f0f0f0',marginTop:20}}> 
                    <button style={{backgroundColor:'#BF4193',fontSize:16,marginLeft:150,width:100,color:'white'}}> Confirm </button>
                </div>
                </div>
                </div>
             
            );
        }
}

const gridStyle = {
    maxWidth:250,
    
};

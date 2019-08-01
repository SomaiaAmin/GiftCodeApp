import React from "react";
import CartLogo from "react-ionicons/lib/IosCart";
import StarRatings from "react-star-ratings";
import { Grid, Icon } from 'semantic-ui-react'
import Divider from '@material-ui/core/Divider';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import ShoppingCartService from '../services/ShoppingCartService';
import { Link } from 'react-router-dom'
import UserService from '../services/UserService';

export class ProductViewComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 1,
            cartItem: {},
            amount: 1,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAmountCard = this.handleAmountCard.bind(this);
        this.handleAmountTicket = this.handleAmountTicket.bind(this);

    }
    handleAmountCard(event) {        
        this.setState({ amount: event.target.value });
        
    }
    handleAmountTicket(event) {
        this.setState({ amount: event.target.value });
    }
    handleSubmit(event) {
        if(UserService.getCurrentUser().id){
        event.preventDefault();
        let userId = UserService.getCurrentUser().id;
        let cartProduct = {
            user_id: userId,
            product_id: this.props.product._id,
            productName: this.props.product.name,
            supplier: this.props.product.supplier,
            productAmount: this.props.product.price,
            productQuantity: parseInt(this.state.amount),
            img: this.props.product.img,
            

        };
        ShoppingCartService.addProducttoCart(cartProduct).then((data) => {
            this.props.history.push('/');

        }).catch((e) => {
            console.error("error");
        })
        alert('Product is added to the cart!')
        window.location.reload();
    }
    else{
        if (window.confirm("You should login to add items to your cart!")) {
            window.open("http://localhost:3001/#/login", "_self");
          }
    }
    }

    render() {
        let amountComp;
        if (this.props.product.isCard) {
            amountComp = <div><form>
                <label style={{ fontSize: 14, marginTop: 10 }}>
                    Value:
              <input style={{ maxWidth: 50, marginLeft: 10, marginRight: 10, allign: 'center' }}
                        type="Number"
                        name="Amount"
                        onChange={this.handleAmountCard}

                    />
                    €
                </label>

            </form></div>;

        }
        else {
            amountComp =
                <div >
                    <div style={priceStyle} >
                        Price: {this.props.product.price} €
            </div>

                    <div>
                        Quantity:
          <select value={this.state.value} onChange={this.handleAmountTicket} style={{ marginTop: 20, marginBottom: 20, marginLeft: 10, fontSize: 18, height: 30 }}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </select>
                    </div>

                </div>
        }

        return (

            <div style={{ marginLeft: 50, marginRight: 20, marginTop: 10, background: "white" }} >
                <Breadcrumb style={{ background: "white" }}>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="http://localhost:3001/#/">
                        Gifts
  </Breadcrumb.Item>
                    <Breadcrumb.Item active>{this.props.product.name}</Breadcrumb.Item>
                </Breadcrumb>
                <div >
                    <Grid celled >
                        <Grid.Row columns={3} divided>
                            <Grid.Column>
                                <div style={{ justifyContent: 'left' }}> {/*image?gift*/}
                                    <img src={this.props.product.img} alt="Gift" style={{ height: 250, marginLeft: '1rem', marginRight: 50 }} />
                                </div>{/*image?gift*/}
                            </Grid.Column>
                            <Grid.Column>
                                <h2>
                                    {this.props.product.name}

                                </h2>
                                <div style={textStyle}>
                                    <StarRatings
                                        rating={this.props.product.rating}
                                        starDimension="18px"
                                        starSpacing="4px"
                                        starRatedColor='gold'
                                    />
                                    <div style={{ marginTop: 0, marginLeft: 5, fontSize: 17 }}>

                                        &nbsp; <Link to={`/reviews/${this.props.product._id}`}> {this.props.product.reviewCount}  Reviews</Link>

                                   </div>

                                </div>
                                <div style={descriptionStyle}>
                                    <Divider />
                                    {this.props.product.description}
                                    <Divider />
                                    {amountComp}
                                    <button style={ButtonStyle} onClick={this.handleSubmit} onKeyPress={this.handleSubmit}>
                                        <CartLogo />
                                        &nbsp; Add to your Cart

                              </button>

                                </div>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row >
                            <Grid.Column>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
               { <hr></hr>}


            </div>
        );
    }
}



const columnStyle = {
    background: "#00000",
    display: "flex",
    'flex-direction': 'row',
    'justify-content': 'flex-start',
    'flex-wrap': 'nowrap',
};
const textStyle = {
    background: "#00000",
    fontSize: 12,
    display: "flex",
    'justify-content': 'flex-start',
    'flex-wrap': 'nowrap',

    'flex-direction': 'row',
};
const priceStyle = {
    background: "#00000",
    fontSize: 20,
    display: "flex",
    'justify-content': 'flex-start',
    'flex-wrap': 'nowrap',

    'flex-direction': 'row',
};
const descriptionStyle = {
    background: "#00000",
    fontSize: 15,
    maxWidth: 500,
    marginTop: 10,
    marginBottom: 20

};
const ButtonStyle = {
    background: "#0000",
    fontSize: 15,
    color: 'black',
    textAllign: 'center',


};

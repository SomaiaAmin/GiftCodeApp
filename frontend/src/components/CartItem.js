import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ShoppingCartService from '../services/ShoppingCartService';
import UserService from '../services/UserService';

export default class CartItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: props.product_amount,
            quantity: props.quantity,

        }

        this.handleChange = this.handleChange.bind(this);
        this.handleRemoveProduct = this.handleRemoveProduct.bind(this);

    }

    handleChange(event) {
        this.setState({quantity:event.target.value}, function(){
            event.preventDefault();
            let productToUpdate= this.props.product;
            let parametersToUpdate = {}
            parametersToUpdate.productQuantity = this.state.quantity;
            ShoppingCartService.updateProduct(productToUpdate, parametersToUpdate).then((data) => {
                this.props.history.goBack();
            }).catch((e) => {
                console.error(e);
                this.setState(Object.assign({}, this.state, {error: 'Error while updating quantity'}));
            });
        });

        window.location.reload();
    }

    handleRemoveProduct(event){

        if(window.confirm('Are you sure you want to remove this item from your shopping cart?')){
            event.preventDefault();
            let product_id = this.props.product.product_id
            let user_id = UserService.getCurrentUser().id

            ShoppingCartService.deleteProduct(user_id,product_id).then((data) => {
                this.props.history.goBack();
            }).catch((e) => {
                console.error(e);
                this.setState(Object.assign({}, this.state, {error: 'Error while deleting cart item'}));
            });

            window.location.reload();
        }
    }

    render(){
        if(!this.props.product.isCard){
        return (
            <Paper>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell align="right" style={{width: 700}}>
                                <div className='d-flex'>
                                    <img src={this.props.product.img} alt="Logo" style={{height: 150}}/>
                                    <div style={{marginLeft: '3rem'}}>
                                        <h2 style={{fontSize: 22, marginLeft: 0}}>{this.props.product.productName}</h2>
                                        <p>Supplier: {this.props.product.supplier}</p>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell align="middle" style={{width: 200}}>{this.props.product_amount} &#8364;</TableCell>
                            <TableCell align="middle" style={{width: 200}}>
                                <select value={this.state.quantity} onChange={this.handleChange} style={{marginTop: 10}}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                </select>
                            </TableCell>
                            <TableCell align="middle" style={{width: 200}}>{this.props.product_amount* this.state.quantity} &#8364;</TableCell>
                            <TableCell>
                                <button className='btn btn-secondary' onClick = {this.handleRemoveProduct} >Remove</button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        );
    }
    else{
        return (
            <Paper>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell align="right" style={{width: 700}}>
                                <div className='d-flex'>
                                    <img src={this.props.product.img} alt="Logo" style={{height: 150}}/>
                                    <div style={{marginLeft: '3rem'}}>
                                        <h2 style={{fontSize: 22, marginLeft: 0}}>{this.props.product.productName}</h2>
                                        <p>Supplier: {this.props.product.supplier}</p>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell align="middle" style={{width: 200}}> </TableCell>
                            <TableCell align="middle" style={{width: 200}}>
                                1
                            </TableCell>
                            <TableCell align="middle" style={{width: 200}}>{this.props.product_amount* this.state.quantity} &#8364;</TableCell>
                            <TableCell>
                                <button className='btn btn-secondary' onClick = {this.handleRemoveProduct} >Remove</button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        );
    }
    }
};

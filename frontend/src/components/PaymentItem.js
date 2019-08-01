import React from 'react';
import { Grid } from 'semantic-ui-react'

export default class PaymentItem extends React.Component {
    constructor(props) {
        super(props);

    }


    render(){

        return (
            <Grid.Row columns={3} divided>
                <Grid.Column style={{width: 100,marginBottom:10}}>
                    <img src={this.props.img} alt="Logo" style={{height: 100}}/>
                </Grid.Column>
                <Grid.Column style={{width: 100, marginLeft: 50,marginBottom:10}}>{this.props.name}</Grid.Column>
                <Grid.Column style={{width: 100, marginLeft: 50,marginBottom:10}}>{this.props.quantity}</Grid.Column>
                <Grid.Column style={{width: 100, marginLeft: 50,marginBottom:10}}>{this.props.amount} €</Grid.Column>
            </Grid.Row> 
        );

    }
};

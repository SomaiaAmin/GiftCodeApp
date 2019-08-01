import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import QRCode from 'qrcode.react';

export default class OrderItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          loading: false,
          data: [],
        }


    }


    render(){

        return (
            <Paper>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell align="middle" style={{width: 200}}>
                                <div className='d-flex'>
                                    <img src={this.props.img} alt="Logo" style={{height: 150}}/>
                                </div>
                            </TableCell>
                            <TableCell align="middle" style={{width: 300}}>
                                <div className='d-flex'>
                                    <div>
                                        <h2 style={{fontSize: 22, marginLeft: 0}}>{this.props.name}</h2>
                                        <p> {this.props.description}</p>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell align="middle" style={{width: 200}}>{this.props.quantity}</TableCell>
                            <TableCell align="middle" style={{width: 200}}>
                            <QRCode value="http://facebook.github.io/react/" style={{width: '50px', height: '50px'}}/>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        );

    }
};

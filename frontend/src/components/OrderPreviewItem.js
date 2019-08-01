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
                            <TableCell align="right">
                                <div className='d-flex'>
                                    <img src={this.props.img} alt="Logo" style={{height: '50px',weight:'50px'}}/>
                                    </div>
                            </TableCell>
                            <TableCell align="left">
                                <div className='d-flex'>
                                    <div>
                                        <h2 style={{fontSize: 10, marginLeft: 0}}>{this.props.name}</h2>
                                        <p style={{fontSize: 8, marginLeft: 0}}> {this.props.description}</p>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell align="left" style={{marginRight: 300}} >{this.props.quantity}</TableCell>
                            <TableCell align="left">
                            <QRCode value="http://facebook.github.io/react/" style={{width: '20px', height: '20px', marginRight: 20}}/>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        );

    }
};

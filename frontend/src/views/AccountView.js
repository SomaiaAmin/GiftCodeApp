import React from 'react';
import UserService from '../services/UserService';
import { Header } from '../components/Header'
import { Footer } from '../components/Footer';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import user from '../images/user.png'


export default class AccountView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],
            sub_total: 0,
            firstName: UserService.getCurrentUser().firstName,
            lastName: UserService.getCurrentUser().lastName,
            username: UserService.getCurrentUser().username

        };
    }

    render() {

        return (
            <div>
                <Header/>
                <div style={{ marginLeft: '1rem', marginRight: 100, marginTop: 20, weight: 1500, background:"white"}} >
                <h1 style={{marginTop: 50, marginLeft:110, fontSize: 24, fontStyle: 'bold'}}>Hello,</h1>
                <h1 style={{marginTop: 20, marginLeft:110, fontSize: 24, marginBottom: 20, fontStyle: 'italic'}}>{this.state.firstName} {this.state.lastName}!</h1>
                <img src={user} style={{height:'150px', weight:'150px', marginLeft:110, marginBottom:50 }}/>
                <Paper style={{marginLeft:110, width: 700, marginBottom:50}}>
                    <Table>
                        <TableHead>
                            <TableRow>
                              <TableCell align="middle" style={{fontSize: 18, marginLeft: 10, fontStyle: 'bold'}}>Email:</TableCell>
                              <TableCell align="middle" style={{fontSize: 18, fontStyle: 'italic'}}>{this.state.username}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell align="middle" style={{fontSize: 18, marginLeft: 10, fontStyle: 'bold'}}>First Name:</TableCell>
                              <TableCell align="middle" style={{fontSize: 18, fontStyle: 'italic'}}>{this.state.firstName}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell align="middle" style={{fontSize: 18, marginLeft: 10, fontStyle: 'bold'}}>Last Name:</TableCell>
                              <TableCell align="middle" style={{fontSize: 18, fontStyle: 'italic'}}>{this.state.lastName}</TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </Paper>
                </div>
                <Footer/>
            </div>
        );
    }

};

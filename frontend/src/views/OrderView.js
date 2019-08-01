import React from 'react';
import PurchasedProductService from '../services/PurchasedProductService';
import UserService from '../services/UserService';
import OrderItem from '../components/OrderItem'
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


export default class OrderView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],
            product:[]
        };
    }

    componentDidMount(){
    }

    componentWillMount(){
        this.setState({
            loading: true
        });

        const idstr=window.location.href;
        const res = idstr.split('/');
        console.log('ilgin ', res[5]);
        let order_id = res[5];
        let user_id = UserService.getCurrentUser().id;


                PurchasedProductService.getPurchasedProductsInOrder(order_id, user_id).then( (orders) => {

                    this.setState({
                        data: orders,
                        loading: false,

                    });

                }).catch((e) => {
                    console.error(e);
                });

    }

    render() {
      const arr = this.state.data
      const orderArray = arr.map((user, i) => {
        return <OrderItem key={arr[i]._id} order_id= {arr[i].order_id} id={arr[i].product_id} name={arr[i].productName} quantity={arr[i].productQuantity}
        description={arr[i].description} supplier={arr[i].supplier} img={arr[i].img} />
      })
        return (

              <div>
              <div id="divToPrint" className="mt4" style={{  backgroundColor: '#f5f5f5',
                width: '210mm',
                minHeight: 'auto',
                marginLeft: 'auto',
                marginRight: 'auto'}}>
                <div>
                    <Table style={{width: '210mm'}}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="middle" style={{width: '40mm'}}>Products</TableCell>
                                <TableCell align="left" style={{width: '20mm'}}>Desription</TableCell>
                                <TableCell align="left" style={{width: '7mm'}}>Quantity</TableCell>
                                <TableCell align="left" style={{width: '18mm'}}>Barcode</TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
            {orderArray}
                <hr />
                </div>
              </div>
            </div>
        );
    }

};

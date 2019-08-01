import React from 'react';
import PurchasedProductService from '../services/PurchasedProductService';
import UserService from '../services/UserService';
import OrderPreviewItem from '../components/OrderPreviewItem'
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


export default class OrderPreviewView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],
            product:[]
        };

        console.log(this.props);
    }

    componentDidMount(){
         const idstr=window.location.href;
         const res = idstr.split('/');

         let order_id = res[5];
         let user_id = UserService.getCurrentUser().id;
         console.log('1')

                 PurchasedProductService.getPurchasedProductsInOrder(order_id, user_id).then(async (orders) => {
                   console.log('2')
                     this.setState({
                         data: orders,
                         loading: false,
                     });
                 }).catch((e) => {
                     console.error(e);
                 });
     }
     componentWillMount(){
         this.setState({
             loading: true
         });



     }


    render() {
      const arr = this.state.data
      const orderArray = arr.map((user, i) => {
        return <OrderPreviewItem key={arr[i]._id} order_id= {arr[i].order_id} id={arr[i].product_id} name={arr[i].productName} quantity={arr[i].productQuantity}
        description={arr[i].description} supplier={arr[i].supplier} img={arr[i].img} />
      })
      if (this.state.loading) {
          return (<h2>Loading...</h2>);
      }
        return (

              <div>
              <div id="divToPrint" className="mt4" style={{  backgroundColor: '#f5f5f5',
                width: '120mm',
                minHeight: 'auto',
                marginLeft: 'auto',
                marginRight: 'auto'}}>
                <div>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="middle" style={{width: '40mm'}}>Products</TableCell>
                                <TableCell align="middle" style={{width: '50mm'}}>Description</TableCell>
                                <TableCell align="left" style={{width: '10mm'}}>Quantity</TableCell>
                                <TableCell align="left" style={{width: '1mm'}}>Barcode</TableCell>
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

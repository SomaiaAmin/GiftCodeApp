import React from 'react';
import ReviewService from '../services/ReviewService';
import ProductService from '../services/ProductService';
import PurchasedProductService from '../services/PurchasedProductService';
import { Header } from '../components/Header'
import { Footer } from '../components/Footer';
import ReviewList from '../components/ReviewList'

import UserService from '../services/UserService';
export default class ReviewView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            loading2: false,
            purchased:[],
            data: [],
            product:[],
            purchaseflag:''
        };
    }
    componentWillMount() {
        this.setState({
            loading: true
        });
        let id = this.props.match.params.id;
        ReviewService.getReviews(id)
            .then(data => {
                this.setState({
                    data: data,
                    loading: false
                });
            })
            .catch(e => {
                console.error(e);
            });
            this.setState({
                loading2: true
            });
        ProductService.getProduct(id).then((data2) => {
    
                this.setState({
                    product: data2,
                    loading2: false,
                });
    
            }).catch((e) => {
                console.error(e);
            });
            if(UserService.getCurrentUser().id){
            PurchasedProductService.getPurchasedProducts(UserService.getCurrentUser().id).then((data3) => {
    
                this.setState({
                    purchased: data3,
                    loading2: false,
                });
                const result=  data3.find(purchase =>purchase.product_id===id)
                if(result){
                    this.setState({
                        purchaseflag:'true'
                    });
                }
                else{
                    this.setState({
                        purchaseflag:'false'
                    });
                }

            }).catch((e) => {
                console.error(e);
            });
        }  
        else{
            this.setState({
                purchaseflag:'nouser'
            });
        }
    }
 
      render() {
        if (this.state.loading ||this.state.loading2) {
            
            return <div>
            <Header/>

            <h2>Loading...</h2>
            <Footer/>
            </div>
        }
        return (
            <div >
            <Header/>
                <ReviewList
                    product_reviews={this.state.data}
                    prod_id={this.props.match.params.id}
                    product={this.state.product}
                    purchased={this.state.purchaseflag}
                />
                <Footer/>
            </div>
        );
    }
};

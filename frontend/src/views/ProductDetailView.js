import React from 'react';
import { Header } from '../components/Header'
import { Footer } from '../components/Footer';
import { ProductViewComponent } from '../components/ProductViewComponent';
import OtherGifts from '../components/OtherGifts';
import ReviewPreviewView from '../views/ReviewPreviewView';
import ProductService from '../services/ProductService';

export class ProductDetailView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            prod: [],
            othergift:[],
            prod_id:''
        };
    }
    componentWillMount(props){
        this.setState({
            loading: true,

        });
        let id = this.props.match.params.id;
        ProductService.getProduct(id).then((data) => {
            console.log(data)

            this.setState({
                loading: false,
                prod:data,
                prod_id:id,

            });

        }).catch((e) => {
            console.error(e);
        });
        ProductService.getProducts().then((data) => {
            console.log(data)

            this.setState({
                loading: false,
                othergift: data
            });
        }).catch((e) => {
            console.error('error with other gifts');
        });

    }
    render() {
        return (
            <div>
                <Header/>
                <div>
                  <ProductViewComponent  product={this.state.prod}/>
                </div>
                <div>
                  <OtherGifts gifts={this.state.othergift} id={this.state.prod.id} />
                </div>
                <div>
                <ReviewPreviewView prod_id = {this.state.prod_id} product={this.state.prod} ></ReviewPreviewView>
              </div>
                <Footer/>
            </div>
        );
    }
};

import React from 'react';
import ReviewService from '../services/ReviewService';
import ReviewPreview from '../components/ReviewPreview'

export default class ReviewPreviewView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            reviews: []
        };
        this.reviewCallBack = this.reviewCallBack.bind(this);
    }
    componentWillMount() {
        this.setState({
            loading: true
        });
        const idstr=window.location.href;
        const res = idstr.split('/');

        ReviewService.getReviews(res[5])
            .then(data => {
                console.log(data);
                this.setState({
                    reviews: data,
                    loading: false
                });

            })
            .catch(e => {

            });


    }
    reviewCallBack = (reviewcount, reviewavg) => {
      this.props.reviewCallbackPreview(reviewcount,reviewavg)
    };
    render() {
        if (this.state.loading) {
            return <h2>Loading???</h2>;
        }
        return (
            <div >
                <ReviewPreview
                    product_reviews={this.state.reviews}
                    prod_id={this.props.product._id}
                    reviewCallback={this.reviewCallBack}
                />
            </div>
        );
    }
};
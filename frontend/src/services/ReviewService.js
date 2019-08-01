import HttpService from './HttpService';

export default class ReviewService {


    static baseURL() {return "http://localhost:3000/product_reviews" }

    static getProducts(){
        return new Promise((resolve, reject) => {
            HttpService.get(this.baseURL(), function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static getReviews(id) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${ReviewService.baseURL()}/${id}`, function(data) {
                if(data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                }
                else {
                    reject('Error while retrieving movie');
                }
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static deleteProduct(id) {
        return new Promise((resolve, reject) => {
            HttpService.remove(`${ReviewService.baseURL()}/${id}`, function(data) {
                if(data.message != undefined) {
                    resolve(data.message);
                }
                else {
                    reject('Error while deleting');
                }
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static updateProduct(movie,id) {
        return new Promise((resolve, reject) => {
            HttpService.put(ReviewService.baseURL, movie, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static createReview(review) {  
        review.id = Math.floor((Math.random() * 100000000) + 1).toString();
     
        return new Promise((resolve, reject) => {
            HttpService.post(`${ReviewService.baseURL()}/`, review, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }
}

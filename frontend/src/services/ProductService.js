import HttpService from './HttpService';

export default class ProductService {

    static baseURL() {return "http://localhost:3000/products" }

    static getProducts(){
        return new Promise((resolve, reject) => {
            HttpService.get(this.baseURL(), function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static getProduct(id) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${ProductService.baseURL()}/${id}`, function(data) {
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
            HttpService.remove(`${ProductService.baseURL()}/${id}`, function(data) {
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

    static updateProduct(product) {
        return new Promise((resolve, reject) => {
            HttpService.put(`${this.baseURL()}/${product._id}`, product, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static getFilteredProducts(category, price){
        return new Promise((resolve, reject) => {
            HttpService.get(`${ProductService.baseURL()}/search/?cat=${category}&price=${price}`, function(data) {
                if(data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                }
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }
}

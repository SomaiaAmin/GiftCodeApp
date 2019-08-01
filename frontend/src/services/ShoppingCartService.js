import HttpService from './HttpService';

export  default class ShoppingCartService {


    static baseURL() {return "http://localhost:3000/shopping_carts" }

    static getProductCount(user_id) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${ShoppingCartService.baseURL()}/count/${user_id}`, function(data) {
                if(data !== undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                    console.log(data);
                }
                else {
                    reject('Error while retrieving movie');
                }
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }


    static getToPurchaseProducts(){
        return new Promise((resolve, reject) => {
            HttpService.get(this.baseURL(), function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static getToPurchaseProducts(id) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${ShoppingCartService.baseURL()}/${id}`, function(data) {
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

    static deleteProduct(id, productId) {
        return new Promise((resolve, reject) => {
            HttpService.remove(`${ShoppingCartService.baseURL()}/${id}/${productId}`, function(data) {
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

    static updateProduct(productToUpdate, parametersToUpdate) {
        return new Promise((resolve, reject) => {
            HttpService.put(`${this.baseURL()}/${productToUpdate.user_id}/${productToUpdate.product_id}`, parametersToUpdate, function(data) {
                resolve(data);

            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }
    static addProducttoCart(cartProduct) {
        return new Promise((resolve, reject) => {
            HttpService.post(ShoppingCartService.baseURL(), cartProduct, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }


}

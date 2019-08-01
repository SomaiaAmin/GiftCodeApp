import HttpService from './HttpService';

export  default class PurchasedProductService {


    static baseURL() {return "http://localhost:3000/purchased_products" }



    static getPurchasedProducts(user_id) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${PurchasedProductService.baseURL()}/${user_id}`, function(data) {
                if(data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                }
                else {
                    reject('Error while retrieving purchased products');
                }
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static getPurchasedProductsInOrder(order_id,user_id) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${PurchasedProductService.baseURL()}/${user_id}/${order_id}`, function(data) {
                if(data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                }
                else {
                    reject('Error while retrieving purchased products');
                }
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static getOrderId() {
        let token = window.localStorage['jwtToken'];
        if (!token) return {};

        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace('-', '+').replace('_', '/');
        return {
            order_id : JSON.parse(window.atob(base64)).order_id
        };
    }

    static moveProductsFromCartToPurchasedList(user_id, order_id) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${PurchasedProductService.baseURL()}/move_from_cart_to_purchased/${user_id}/${order_id}`, function(data) {
                if(data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                }
                else {
                    reject('Error while retrieving purchased products');
                }
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

}

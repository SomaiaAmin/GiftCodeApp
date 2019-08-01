"use strict";

import HttpService from './HttpService';

export  default class SendGiftService {


    static baseURL() {return "http://localhost:3000/purchased_products" }

    static getPurchasedProduct(user_id, order_id) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${SendGiftService.baseURL()}/${user_id}/${order_id}`, function(data) {
                if(data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                }
                else {
                    reject('Error while retrieving order');
                }
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }
}

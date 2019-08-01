"use strict";

import HttpService from './HttpService';

export default class PaymentService {

    constructor(){
    }

    static baseURL() {return "http://localhost:3000/payments" }


    static createPrayment(payment) {
        payment.intent ='sale';
        payment.redirect_urls = {
                'return_url':'http://localhost:3000/payments/process',
                'cancel_url':'http://localhost:3000/payments/cancel'
            };
        payment.payer = {
                'payment_method':'paypal'
            };
        payment.transactions = [{
                'amount':{
                    'total':'7.47',
                    'currency':'USD'
                },
                'description':'This is the payment transaction description.'
            }];
        return new Promise((resolve, reject) => {
            HttpService.post(`${PaymentService.baseURL()}/add`, payment, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }
}

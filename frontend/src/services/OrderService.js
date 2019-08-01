import HttpService from './HttpService';

export default class OrderService {


    static baseURL() {return "http://localhost:3000/orders" }

    static createOrder(order) {

        return new Promise((resolve, reject) => {
            HttpService.post(`${OrderService.baseURL()}/`, order, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }
}

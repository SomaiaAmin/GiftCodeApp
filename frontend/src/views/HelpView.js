import React from 'react';
import { Header } from '../components/Header'
import { Footer } from '../components/Footer';




export default class HelpView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],
            product:[]
        };
    }

    render() {
        return (

          <div>
            <Header/>
            <h2 className='d-flex justify-content-left text-secondary' style={{fontSize: 22, marginTop:50, marginLeft: 150}}>Frequently Asked Questions</h2>
            <div>
              <h2 className='d-flex justify-content-left text-secondary' style={{fontSize: 18, marginTop:50, marginLeft: 150}}>What is GiftCode All-in-one GiftCard?</h2>
              <p className='d-flex justify-content-left text-secondary' style={{fontSize: 16, marginTop:10, marginLeft: 150, marginRight:500}}>
                          GiftCode All-in-one GiftCard allows the gift receiver spend her/his
                          gift at any of our partners. Our partners can be found on Help page. You can define the amount of the GiftCard by your choice.
                          All you need to do is write the amount of your gift and send your beloved ones!</p>
            </div>
            <hr style={{marginTop:10, marginLeft: 120, marginRight:500}}/>
            <div>
              <h2 className='d-flex justify-content-left text-secondary' style={{fontSize: 18, marginTop:50, marginLeft: 150}}>How can I send my gift?</h2>
              <p className='d-flex justify-content-left text-secondary' style={{fontSize: 16, marginTop:10, marginLeft: 150, marginRight:500}}>
                          There are two options for our users to send their gifts; via Email or Whatsapp text.
                          After your purchase, you will be directed to the sending page and here, you can choose
                          the option you want to send your gift. You can even add your personal message to the gift!
                          Also this page allows you to see the preview of your gift before sending it!</p>
            </div>
            <hr style={{marginTop:10, marginLeft: 120, marginRight:500}}/>
            <div>
              <h2 className='d-flex justify-content-left text-secondary' style={{fontSize: 18, marginTop:50, marginLeft: 150}}>How can I know my purchase is successful?</h2>
              <p className='d-flex justify-content-left text-secondary' style={{fontSize: 16, marginTop:10, marginLeft: 150, marginRight:500}}>
                          When your payment is received, you will be directed to sending gift page. If your payment
                          is not successful for some reason, you will be redirected to the payment page and here, you
                          can try again! We accept PayPal or Credit Card payments.</p>
            </div>
            <hr style={{marginTop:10, marginLeft: 120, marginRight:500}}/>
            <div>
              <h2 className='d-flex justify-content-left text-secondary' style={{fontSize: 18, marginTop:50, marginLeft: 150}}>Can I send multiple presents to multiple people on one purchase?</h2>
              <p className='d-flex justify-content-left text-secondary' style={{fontSize: 16, marginTop:10, marginLeft: 150, marginRight:500}}>
                          No you can't. You are able to send gifts for one person at a time.
                          If you want to send multiple gifts to multiple people, you have to add your
                          gifts to your cart for one person only, purchase and send them, and after that
                          you need to repeat these steps again for the other people.</p>
            </div>
            <hr style={{marginTop:10, marginLeft: 120, marginRight:500}}/>
            <Footer/>
        </div>
        );
    }

};

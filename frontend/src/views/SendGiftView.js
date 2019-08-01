import React from 'react';
import { Header } from '../components/Header'
import { Footer } from '../components/Footer';
import { Grid } from 'semantic-ui-react'
import whatsappLogo from '../images/whatsapp.png';
import emailLogo from '../images/gmail.png';
import OrderPreviewView from '../views/OrderPreviewView';



export default class SendGiftView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],
            message: '',
            whatsappbox: false,
            emailbox: false,
            messengerbox:  false,
            reject: true,
            numPages: null,
            pageNumber: 1,
            disabled: true,
            img: ''
        };

        this.handleTextInput = this.handleTextInput.bind(this);
        this.handleButtonPress = this.handleButtonPress.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleWhatsapp = this.handleWhatsapp.bind(this);
        this.handleMessenger = this.handleMessenger.bind(this);
        this.handleFacebook = this.handleFacebook.bind(this);

    }

    handleButtonPress(event){

      const idstr=window.location.href;
      const res = idstr.split('/');

      let order_id = res[5];

      if((this.state.whatsappbox === true) && (this.state.emailbox === false) && (this.state.messengerbox === false)){
        let msg = this.state.message;
        window.open('https://wa.me/?text='+encodeURIComponent('You have a gift from GiftCode!'+ '\n' + msg+ '\n' + ' http://localhost:3001/#/order/' + order_id));
        window.location.hash = "/";
      }
      else if((this.state.whatsappbox === false) && (this.state.emailbox === true) && (this.state.messengerbox === false)){
        let msgSubject = 'You have a gift from GiftCode!'
        let msgbody = this.state.message
        let url = 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=&su='+ msgSubject +'&body='+msgbody + ' http://localhost:3001/%23/order/' + order_id+'&ui=2&tf=1&pli=1';
        window.open(url, 'sharer', 'toolbar=0,status=0,width=648,height=395');
        window.location.hash = "/";
      }
      else if((this.state.whatsappbox === false) && (this.state.emailbox === false) && (this.state.messengerbox === true)){
        this.setState({reject: true});
      }
      else {
          window.alert('Please choose one option!');
          this.setState({reject: true});
      }

    }

    handleWhatsapp(){
      this.setState({whatsappbox: !this.state.whatsappbox});
      if((this.state.whatsappbox === true) && (this.state.emailbox === false) && (this.state.messengerbox === false)){
        this.setState({reject: false});
      }
      else {
          this.setState({reject: true});
      }

    }

    handleEmail(){
      this.setState({emailbox: !this.state.emailbox});
      if((this.state.whatsappbox === false) && (this.state.emailbox === true) && (this.state.messengerbox === false)){
        this.setState({reject: false});
      }
      else {
          this.setState({reject: true});
      }
    }

    handleMessenger(){
      this.setState({messengerbox: !this.state.messengerbox});
      if((this.state.whatsappbox === false) && (this.state.emailbox === false) && (this.state.messengerbox === true)){
        this.setState({reject: false});
      }
      else {
          this.setState({reject: true});
      }
    }

    handleTextInput(event) {
        this.setState({message: event.target.value});
     }

     handleFacebook(){
       window.fbAsyncInit = function() {
         window.FB.init({
           appId            : 467680530475010,
           autoLogAppEvents : true,
           xfbml            : true,
           version          : 'v3.3'
         });
       }
       window.FB.login(function(response) {
       if (response.authResponse) {
        console.log('Welcome!  Fetching your information.... ');
        window.FB.api('/me', function(response) {
          console.log('Good to see you, ' + response.name + '.');
        });
       } else {
        console.log('User cancelled login or did not fully authorize.');
       }
   });
     }

     //window.open('fb-messenger://share?link=' + encodeURIComponent('Hello') + '&app_id=' + encodeURIComponent(468435820588566))

    render() {

        return (
              <div>
                <Header/>
                  <div className='d-flex justify-content-around ml-3 mr-3 mt-3' style={{backgroundColor: '#dbdbdb', height: 100}}>
                      <div>
                          <h4 className='pt-4 text-secondary font-italic'>1. Shopping Cart</h4>
                          <hr/>
                      </div>
                      <div>
                          <h4 className='pt-4 text-secondary font-italic'>2. Payment</h4>
                          <hr/>
                      </div>
                      <div>
                          <h4 className='pt-4 text-dark font-italic'>3. Sending Options</h4>
                          <hr style={{backgroundColor: '#BF4193'}}/>
                      </div>
                  </div>
                <div>
                    <h2 className='d-flex justify-content-center text-secondary' style={{marginTop: 20, marginLeft: '5rem', fontSize:14}}>Your purchase is successful!</h2>
                    <h2 className='d-flex justify-content-center text-secondary' style={{marginTop: 10, marginLeft: '5rem', fontSize:14}}>Now, choose an option to send your gift!</h2>
                </div>

                <Grid celled >
                    <Grid.Row columns={3} divided>
                        <Grid.Column>
                            <div>
                                <h2 className='d-flex justify-content-left text-secondary' style={{fontSize: 20, marginLeft: 150, marginTop: 70, marginRight:0}}>Sending Options</h2>
                                <hr style={{ marginLeft:100, marginRight: 120}}/>
                                <h2 className='d-flex justify-content-center text-secondary' style={{fontSize: 14, marginRight: 300, marginLeft: 70}}>How would you like to send your gift?</h2>
                                <button disabled={this.state.disabled} style={{marginLeft: 200, marginTop: 35, color:'#27B039', height: '50px'}}>
                                <input key = 'whatsapp' type="checkbox" onChange={this.handleWhatsapp}/>
                                &nbsp;
                                Whatsapp
                                &nbsp;
                                <img src={whatsappLogo} style={{marginLeft: 10, height: '35px', weight: '35px'}}/>
                                &nbsp;
                                </button>
                                <button disabled={this.state.disabled} style={{marginLeft: 70, color:'#C74A4A', height: '50px'}}>
                                <input key = 'email' type="checkbox" onChange={this.handleEmail}/>
                                &nbsp;
                                Email
                                &nbsp;
                                <img src={emailLogo} style={{marginLeft: 20, height: '30px', weight: '30px'}}/>
                                &nbsp;
                                </button>
                                <hr style={{ marginLeft:100, marginRight: 120}}/>
                                <h2 className='d-flex justify-content-center text-secondary' style={{fontSize: 14, marginRight: 300, marginLeft: 150}}>Personalize your gift by writing a special message</h2>
                                <Grid style={{fontSize:14, marginLeft: 130}} >
                                    <input
                                      style={{paddingTop:0, paddingBottom: 0, height: 200, width:550, marginLeft:20, marginRight:20}}
                                      id="MessageField"
                                      type="text"
                                      required={false}
                                      value={this.state.message}
                                      onChange={this.handleTextInput}
                                    />
                                </Grid>
                                <hr style={{ marginLeft:100, marginRight: 120}}/>
                                <button style={{marginTop: 10, marginLeft: 650, fontSize: 16, backgroundColor: '#C23C9C', height: '40px', color: 'white'}} onClick={this.handleButtonPress}>Send</button>
                            </div>
                        </Grid.Column>
                        <Grid.Column style={{marginLeft: 50, maxWidth: 300}}>
                            <h2 className='d-flex justify-content-left text-secondary' style={{fontSize: 20, marginRight: 300, marginLeft: 0, marginTop: 70}}>Preview</h2>
                            <hr/>
                            <div>
                            <p style={{fontSize: 14, marginLeft: 10}}>You have a gift from GiftCode!</p>
                            <OrderPreviewView/>
                            </div>
                            <div>
                            <p style={{fontSize: 14, marginLeft: 10}}>  {this.state.message}</p>
                            </div>
                            <hr/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row >
                    <Grid.Column>
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
                <hr/>
        <Footer/>
            </div>
        );
    }

}

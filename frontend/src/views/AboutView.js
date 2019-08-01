import React from 'react';
import { Header } from '../components/Header'
import { Footer } from '../components/Footer';
import { Grid } from 'semantic-ui-react'
import filmtheater from '../images/cinema-filmtheater.jpeg';
import cinestar from '../images/cinestar-logo.png';
import cotidiano from '../images/cotidiano.png';
import hardrock from '../images/hardrock.jpg';
import hofbrau from '../images/hofbrau_logo.png';
import indisch from '../images/indisch.jpg';
import jackwolfskin from '../images/jack-wolfskin.png';
import louisvuitton from '../images/louis-vuitton.jpg';
import tum from '../images/tum.png';



export default class AboutView extends React.Component {

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
            <div>
              <h2 className='d-flex justify-content-left text-secondary' style={{fontSize: 22, marginTop:50, marginLeft: 150}}>About GiftCode</h2>
              <p className='d-flex justify-content-left text-secondary' style={{fontSize: 18, marginTop:20, marginLeft: 150, marginRight:200}}>
                          GiftCode is an online gift exchange platform to help the people who would like to send a
                          gift to their friends or relatives to rescue them from the shipping process,
                          complexity and waste of time during shipping with sending the receiver a barcode
                          via email or WhatsApp which the receiver can use to get the gift at the real store.</p>
              <h2 className='d-flex justify-content-left text-secondary' style={{fontSize: 22, marginTop:50, marginLeft: 150}}>About Us</h2>
              <p className='d-flex justify-content-left text-secondary' style={{fontSize: 18, marginTop:20, marginLeft: 150, marginRight:200}}>Somaia Amin</p>
              <p className='d-flex justify-content-left text-secondary' style={{fontSize: 18, marginTop:0, marginLeft: 150, marginRight:200}}>Elcin Can Cavusoglu</p>
              <p className='d-flex justify-content-left text-secondary' style={{fontSize: 18, marginTop:20, marginLeft: 150, marginRight:200}}>Ilgin Camoglu</p>
              <p className='d-flex justify-content-left text-secondary' style={{fontSize: 18, marginTop:20, marginLeft: 150, marginRight:200}}>Selin Erdem</p>
              <img src={tum} style={{marginTop:0, marginLeft: 140, marginRight:200, weight:'100px', height:'100px'}}/>
              <h2 className='d-flex justify-content-left text-secondary' style={{fontSize: 22, marginTop:50, marginLeft: 150}}>Our Partners</h2>
            </div>
            <div style={{  marginTop: 80, background:"white",marginLeft: 0, marginRight: 0}} >
            <Grid celled >
                <Grid.Row columns={4} divided>
                    <Grid.Column style={{marginLeft: 50, maxWidth: 300}}>
                        <img src={filmtheater} style={{marginLeft: 100, marginRight: 50, weight:'200px', height:'200px'}}/>
                    </Grid.Column>
                    <Grid.Column style={{marginLeft: 50, maxWidth: 300}}>
                        <img src={cinestar} style={{marginLeft: 50, marginRight: 50, weight:'150px', height:'150px'}}/>
                    </Grid.Column>
                    <Grid.Column style={{marginLeft: 50, maxWidth: 300}}>
                        <img src={cotidiano} style={{marginLeft: 130, marginRight: 50, weight:'200px', height:'200px'}}/>
                    </Grid.Column>
                    <Grid.Column style={{marginLeft: 50, maxWidth: 300}}>
                        <img src={hardrock} style={{marginLeft: 50, marginRight: 50, weight:'150px', height:'150px'}}/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row >
                <Grid.Column>
                </Grid.Column>
                </Grid.Row>
            </Grid>
            </div>
            <div style={{ marginTop: 100, background:"white",marginLeft: 0, marginRight: 0}} >
            <Grid celled >
                <Grid.Row columns={4} divided>
                    <Grid.Column style={{marginLeft: 50, maxWidth: 300}}>
                        <img src={hofbrau} style={{marginLeft: 100, marginRight: 50, weight:'200px', height:'200px'}}/>
                    </Grid.Column>
                    <Grid.Column style={{marginLeft: 50, maxWidth: 300}}>
                        <img src={indisch} style={{marginLeft: 50, marginRight: 50, weight:'150px', height:'150px'}}/>
                    </Grid.Column>
                    <Grid.Column style={{marginLeft: 50, maxWidth: 300}}>
                        <img src={louisvuitton} style={{marginLeft: 50, marginRight: 50, weight:'200px', height:'200px'}}/>
                    </Grid.Column>
                    <Grid.Column style={{marginLeft: 50, maxWidth: 300}}>
                        <img src={jackwolfskin} style={{marginLeft: 50, marginRight: 50, weight:'150px', height:'150px'}}/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row >
                <Grid.Column>
                </Grid.Column>
                </Grid.Row>
            </Grid>
            </div>
            <hr/>
    <Footer/>
        </div>
        );
    }

};

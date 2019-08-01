import React from 'react';

import Navigator from './Navigator';
import logo from '../images/giftcode-logo.png'

export class Footer extends React.Component {

    render() {
        return (
            <div className="border-top" style={footerStyle}>
                <div>
                  <Navigator />
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img src={logo} alt="Logo" style={{height: 50}}/>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 7}}>
                    <p>© 2019 Copyright</p>
                  </div>
                </div>

            </div>
        );

    }
};

const footerStyle = {
    background: '#ebf1fd',
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    bottom: 0,
    fontSize: 12,
    position: 'relative',
    left: 0,
    right: 0

};

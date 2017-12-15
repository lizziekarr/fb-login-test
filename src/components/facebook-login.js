import React, { Component} from 'react';
import FacebookProvider, { Login } from 'react-facebook';

export default class FacebookLogin extends Component {
    handleResponse (data) {
        console.log(data);
    }

    handleError (error){
        this.setState({ error });
    }

    render() {
        return (
            <FacebookProvider appId="205009246712375">
                <Login
                    scope="email"
                    onResponse={this.handleResponse}
                    onError={this.handleError}
                >
                    <span><img src='https://s3.amazonaws.com/assets.how2car/images/icons/facebook-login.svg'/></span>
                </Login>
            </FacebookProvider>
        );
    }
}

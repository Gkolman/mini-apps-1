// import React from 'react';
// import ReactDOM from 'react-dom';

import CreateAccount from './components/CreateAccount.js';
import AddressForm from './components/AddressForm.js';
import PaymentForm from './components/PaymentForm.js';
// import $ from '../../node_modules/jquery'
// import $ from '/js/libs/jquery/dist/jquery.js'

// var PaymentForm = require('../../compiled/src/components/PaymentForm.js')

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',

      street: '',
      suite: '',
      city: '',
      state: '',
      zip: '',
      phone: '',

      ccNumber: '',
      expr: '',
      cvv: '',
      billing: ''
    };
  }

  usernameText(e) {
    e.preventDefault();
    this.setState({ username: e.target.value });
  }
  emailText(e) {
    e.preventDefault();
    this.setState({ email: e.target.value });
  }
  passwordText(e) {
    e.preventDefault();
    this.setState({ password: e.target.value });
  }
  submitCreateAccount(e) {
    e.preventDefault();
    console.log('state -> ', this.state);
    $.ajax({
      url: '/account',
      type: 'POST',
      data: { data: this.state },
      success: () => {
        console.log('successful ajax post');
      },
      error: err => {
        console.log('ajax err -> ', err);
      }
    });
  }

  streetText(e) {
    e.preventDefault();
    this.setState({ street: e.target.value });
  }
  suiteText(e) {
    e.preventDefault();
    this.setState({ suite: e.target.value });
  }
  cityText(e) {
    e.preventDefault();
    this.setState({ city: e.target.value });
  }
  stateText(e) {
    e.preventDefault();
    this.setState({ state: e.target.value });
  }
  zipText(e) {
    e.preventDefault();
    this.setState({ zip: e.target.value });
  }
  phoneText(e) {
    e.preventDefault();
    this.setState({ phone: e.target.value });
  }
  submitAddressForm(e) {
    e.preventDefault();
    console.log('state -> ', this.state);
    $.ajax({
      url: '/address',
      type: 'POST',
      data: { data: this.state },
      success: () => {
        console.log('successful ajax post');
      },
      error: err => {
        console.log('ajax err -> ', err);
      }
    });
  }

  ccNumberText(e) {
    e.preventDefault();
    this.setState({ ccNumber: e.target.value });
  }
  exprText(e) {
    e.preventDefault();
    this.setState({ expr: e.target.value });
  }
  cvvText(e) {
    e.preventDefault();
    this.setState({ cvv: e.target.value });
  }
  billingText(e) {
    e.preventDefault();
    this.setState({ billing: e.target.value });
  }

  submitPaymentForm(e) {
    e.preventDefault();
    console.log('state -> ', this.state);
    $.ajax({
      url: '/payment',
      type: 'POST',
      data: { data: this.state },
      success: () => {
        console.log('successful ajax post');
      },
      error: err => {
        console.log('ajax err -> ', err);
      }
    });
  }
  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(CreateAccount, {
        username: this.usernameText.bind(this),
        email: this.emailText.bind(this),
        password: this.passwordText.bind(this),
        submit: this.submitCreateAccount.bind(this)
      }),
      React.createElement(AddressForm, {
        street: this.streetText.bind(this),
        suite: this.suiteText.bind(this),
        state: this.stateText.bind(this),
        city: this.cityText.bind(this),
        zip: this.zipText.bind(this),
        phone: this.phoneText.bind(this),
        submit: this.submitAddressForm.bind(this)
      }),
      React.createElement(PaymentForm, {
        cc: this.ccNumberText.bind(this),
        expr: this.exprText.bind(this),
        cvv: this.cvvText.bind(this),
        billing: this.billingText.bind(this),
        submit: this.submitPaymentForm.bind(this)
      }),
      React.createElement(
        'h1',
        null,
        'client is running'
      )
    );
  }
};

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './src/App.jsx'

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));

// export default App;
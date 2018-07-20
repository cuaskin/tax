import React, { Component } from "react";
import LoginView from "./LoginView";
import SignUpView from "./SignUpView";
import PasswordReset from './PasswordReset';

class AuthView extends Component {
  constructor() {
    super();

    //1.LoginView
    //2.SignUpView
    //3.PasswordResetView

    this.state = {
      currentView: 1
    };
  }

  /**props */
  changeView(newView) {
    console.log("LoginView Çalıştı.", newView);
    this.setState({
      currentView: newView
    });
  }

  render() {
      /** if con. is 1 run <LoginView/>
       *  else if con. is 2 run <SignUpView/>
       *  else run <PasswordResetle/>
       */
    return this.state.currentView === 1
        ? <LoginView onViewChange={this.changeView.bind(this)} />
        :this.state.currentView === 2
        ? <SignUpView onViewChange={this.changeView.bind(this)}/>
        : <PasswordReset onViewChange={this.changeView.bind(this)}/>
  }
}

export default AuthView;

import React from "react";
import { connect } from "react-redux";
import { userInit } from "../../../../store/userReducer";
import { post } from "../../../../utils/Http.helper";
import {hashHistory} from "react-router"; // redirect app

class LoginView extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      hasError: false,
      errorMessage: ""
    };
  }

  onInputChanged(e) {
    this.setState({
      [e.target.name]: e.target.value,
      hasError: false
    });
  }

  /** validasyon form if it dont obey standarts, show error */
  renderError() {
    return (
      <div className="alert alert-danger has-error">
        {this.state.errorMessage}
      </div>
    );
  }

  onUserClick() {
    if (this.state.email === "" || this.state.password === "") {
      this.setState({
        hasError: true,
        errorMessage: "Lütfen tüm alanları doldurunuz!"
      });

      return; //break onUserClick() method
    }
    //Http Call
    const user = {
      email: this.state.email,
      password: this.state.password
    };

    post("auth/login", user).then(response => {
      console.log("response:", response);
      console.log("response-message", response.message);
      if (response.status) {
        // save Token to localStorage
        localStorage.setItem("userToken", response.token);
        this.props.userInit({ email: user.email });

        //redirect dashboard
       hashHistory.push('/app');

      } else {
        this.setState({
          password:"",
          hasError: !response.status,
          errorMessage: response.message
        });
      }
    });
  }

  render() {
    const onViewChange = this.props.onViewChange;
    const Error = this.renderError.bind(this);

    return (
      <div>
        <form className="form-inline">
          <div className="form-group ">
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="E-Posta"
              value={this.state.email}
              onChange={this.onInputChanged.bind(this)}
            />
          </div>
          <div className="form-group mx-sm-3">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Şifre"
              value={this.state.password}
              onChange={this.onInputChanged.bind(this)}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.onUserClick.bind(this)}
          >
            Giriş Yap
          </button>
          <a
          href="#"
            onClick={e => {
              e.preventDefault();
              onViewChange(3);
            }}
          >
            Şifremi Unuttum!
          </a>
        </form>
        {this.state.hasError ? <Error /> : null}
        <p>
          Üye Olmak için{" "}
          <b>
            <u>
              <a 
              href="#"
                onClick={e => {
                  e.preventDefault();
                  onViewChange(2);
                }}
              >
                Tıklayınız
              </a>
            </u>
          </b>
        </p>
      </div>
    );
  }
}

/** connect için :
 * 1-State alanı bağma
 * 2-Action Bağlamak*/

//1 connect state
const mapStateToProps = state => {
  return {
    userData: state.user
  };
};

//2 connect action
const mapDispatchToProps = dispatch => {
  return {
    userInit: user => dispatch(userInit(user))
  };
};

/** if u add Connect ,changed export like below */
export default connect(mapStateToProps, mapDispatchToProps)(LoginView);

//export default LoginView;

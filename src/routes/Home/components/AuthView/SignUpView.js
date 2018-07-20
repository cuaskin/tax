import React from "react";
//import axios from "axios";
import * as Http from "../../../../utils/Http.helper";

class SignUpView extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      hasError: false,
      errorMessage: ""
    };
  }

  onSignUp(e) {
    e.preventDefault();
    //this.setState.email="";
    //this.setState.password="";
    if (this.state.email === "" || this.state.password === "") {
      this.setState({
        hasError: true,
        errorMessage: "Lütfen tüm alanları doldurunuz!"
      });
      return; //out onSignUp method
    }

    Http.post("auth/sign-up", this.state)
    .then(response => {
      console.log("response",response);

      if(!response.status){
        this.setState({
          email:"",
          password:"",
          hasError: !response.status,
          errorMessage: response.error.code === 11000 ? 'Bu email adresi zaten kullanıldı.' : "Beklenmeyen bir hata oluştu."
        })
      }
    });
  }

  onInputChanged(e) {
    this.setState({
      [e.target.name]: e.target.value,
      hasError:false
    });
  }
  /**to show error message */
  renderError() {
    return <div className="alert alert-danger has-error">{this.state.errorMessage}</div>;
  }

  render() {
    const { onViewChange } = this.props;
    const Error = this.renderError.bind(this);

    return (
      <div>
        <form className="form-inline" onSubmit={this.onSignUp.bind(this)}>
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
          <button type="submit" className="btn btn-primary">
            Kayıt Ol
          </button>
        </form>
        {this.state.hasError ? <Error /> : null}
        <p>
          Zaten Üye misiniz? <br />
          Giriş yapmak için{" "}
          <b>
            <u>
              <a
              href="#"
                onClick={e => {
                  e.preventDefault();
                  onViewChange(1);
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

//const mystyle = {width: "397px", marginRight: "10px"}

export default SignUpView;

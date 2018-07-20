import React from "react";

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
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

  renderError() {
    return (
      <div className="alert alert-danger has-error">
        {this.state.errorMessage}
      </div>
    );
  }

  onUserClick() {
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.phoneNumber === "" ||
      this.state.message === ""
    ) {
      this.setState({
        hasError: true,
        errorMessage: "Lütfen tüm alanları doldurunuz!"
      });
      return;
    } else {
      this.setState({
        name: "",
        email: "",
        phoneNumber: "",
        message: ""
      });

      this.setState({
        hasError: true,
        errorMessage: "Başarıyla gönderilmiştir."
      });
      setTimeout(() => {
        this.setState({
          hasError: false
        });
      }, 3000);
    }
  }

  render() {
    const Error = this.renderError.bind(this);
   
    return (
      <div className="home-container">
        <div>
          <div className="form-area">
            <form>
              <h3>İletişim Formu</h3>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onInputChanged.bind(this)}
                  placeholder="Adınız"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.onInputChanged.bind(this)}
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="mobile"
                  name="phoneNumber"
                  value={this.state.phoneNumber}
                  onChange={this.onInputChanged.bind(this)}
                  placeholder="(---) -- --"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  type="textarea"
                  id="message"
                  name="message"
                  value={this.state.message}
                  onChange={this.onInputChanged.bind(this)}
                  placeholder="Mesaj"
                  maxLength="199"
                  rows="6"
                />
              </div>
              {this.state.hasError ? <Error /> : null}
              <button
                type="button"
                id="submit"
                name="submit"
                className="btn btn-primary pull-right"
                onClick={this.onUserClick.bind(this)}
              >
                Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

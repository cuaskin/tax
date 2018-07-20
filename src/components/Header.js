import React from "react";
import { Link } from "react-router";

/** ıt has a state Component like Class extends React.Component*/
class Header extends React.Component {
  constructor() {
    super(); /** call constructur which is extends class like React.Component */

    this.state = {
      isNavOpen: false
    };
  }

  /** functin for collapse button */
  buttonClicked() {
    console.log("Collapse Clicked.");
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    console.log("RENDERİNG...");
    return (
      <header>
        <nav className="container navbar navbar-expand-lg justify-content-between">
          <div className="">
            <a href="#" className="navbar-brand">
              taxicom
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.buttonClicked.bind(this)}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="navbar-collapse"
            style={{ display: this.state.isNavOpen ? "block" : "none" }}
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" activeClassName="active" className="nav-link">
                  Ana Sayfa
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/hakkimizda"
                  activeClassName="active"
                  className="nav-link"
                >
                  Hakkımızda
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/iletisim"
                  activeClassName="active"
                  className="nav-link"
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;

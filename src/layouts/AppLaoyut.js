/**
 *User Page
 */
import React from "react";
//import { IndexLink, Link } from "react-router";
import PropTypes from "prop-types";
import Footer from "../components/Footer";

export const AppLayout = ({ children }) => (
  <div className="home-container">
    {children}
    <Footer />
  </div>
);

AppLayout.PropTypes = {
  children: PropTypes.node
};

export default AppLayout;

/**
 * Initital project from WebLayout
 * If it run  project show this here to users
 */

import React from "react";
//import { IndexLink, Link } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import propTypes from "prop-types";

export const WebLayout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

WebLayout.propTypes = {
  children: propTypes.node
};

export default WebLayout;

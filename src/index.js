import React from "react";
import ReactDOM from "react-dom";
import createStore from "./store/createStore";
import registerServiceWorker from "./registerServiceWorker";
import "./styles/main.sass";

const store = createStore(window.__INITIAL_STATE__);
const MOUNT_NODE = document.getElementById("root");

const App = require("./components/App").default;
const routes = require("./routes/index").default(store);

ReactDOM.render(<App store={store} routes={routes} />, MOUNT_NODE);

registerServiceWorker();

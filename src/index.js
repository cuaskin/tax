import React from "react";
import ReactDOM from "react-dom";

import createStore from "./store/createStore";
import "./styles/main.sass";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(window.__INITIAL_STATE__);
const MOUNT_NODE = document.getElementById("root");

//let render = () => {
  const App = require("./components/App").default;
  const routes = require("./routes/index").default(store);

  ReactDOM.render(<App store={store} routes={routes} />, MOUNT_NODE);
//};

//Development Tools
/*if (process.env === "development") {
  if (module.hot) {
    const renderApp = render;
    const renderError = error => {
      const RedBox = require("redbox-react").default;
      ReactDOM.render(<RedBox error={error} />, MOUNT_NODE);
    };
    render = () => {
      try {
        renderApp();
      } catch (error) {
        console.error(error);
        renderError(error);
      }
    };

    module.hot.accept(["./components/App", "./routes/index"], () => {
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE);
        render();
      });
    });
  }
}

if (!(process.env === "test")) render();*/

registerServiceWorker();

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers } from "redux";
//import reducer from "./store/reducer";
import counterReducer from "./store/reducers/counterReducer";
import resultReducer from "./store/reducers/resultReducer";
import { Provider } from "react-redux";

const reduxStore = createStore(
  combineReducers({
    ctr: counterReducer,
    res: resultReducer,
  })
);

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

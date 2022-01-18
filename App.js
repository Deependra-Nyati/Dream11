import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./src/store";
import Loader from "./src/components/Loader";
import Toast from "./src/components/Toast";
import Auth from "./src/screens/Auth";
import MyHomePage from "./src/screens/MyHomePage";
import RegistrationPage from './src/screens/RegistrationPage'
export default class App extends Component {
  render() {
    return (
      // <MyHomePage/>
      // <RegistrationPage />
      <Provider store={store}>
        <Auth />
        <Loader />
        <Toast />
      </Provider>
    );
  }
}

import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { connect } from "react-redux";

import Home from "./containers/Home";
import Setting from "./containers/Setting";
import CustomerList from './containers/CustomerList';
import CustomerDetails from './containers/CustomerDetails';

import MainLayout from "./layouts/MainLayout";
import EmptyLayout from "./layouts/EmptyLayout";

const NotFound = () => {
  return <div>NotFound</div>;
};

const MainRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <MainLayout>
          <Component {...matchProps} />
        </MainLayout>
      )}
    />
  );
};

const EmptyRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <EmptyLayout>
          <Component {...matchProps} />
        </EmptyLayout>
      )}
    />
  );
};

class App extends Component {
  render() {
    const { settings } = this.props;

    return (
      <MuiThemeProvider theme={settings.theme}>
        <CssBaseline />
        <div style={{ height: "100vh" }}>
          <Router>
            <Switch>
              <MainRoute path="/dashboard" component={Home} />
              <MainRoute path="/setting" component={Setting} />
              <MainRoute path="/customers" component={CustomerList} />
              <MainRoute path="/customer-details/:id" component={CustomerDetails} />
              <MainRoute exact path="/" component={Home} />
              <EmptyRoute component={NotFound} />
            </Switch>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    settings: state.settings,
  };
};

export default connect(
  mapStateToProps,
  null
)(App);

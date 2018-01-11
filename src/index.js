/*globals module: false */
import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { grey, blueGrey } from 'material-ui/colors';
import { AppContainer } from 'react-hot-loader';

import reducer from 'reducers';
import App from './App';
import ArticleApi from 'articleApi';

import 'index.css';
import 'typeface-roboto';

const history = createHistory();
const thunkWithClient = thunk.withExtraArgument(new ArticleApi());
const store = createStore(reducer, applyMiddleware(thunkWithClient));

const theme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: {
      ...blueGrey,
    },
    text: {
      primary: blueGrey[800],
    },
  },
  typography: {
    fontFamily:
      '"Playfair Display", "Hiragino Mincho ProN", serif, Roboto Helvetica, Arial, sans-serif',
    display1: {
      color: blueGrey[800],
    },
    body1: {
      fontSize: 18,
      fontFamily:
        '"Hiragino Mincho ProN", serif, Roboto Helvetica, Arial, sans-serif',
    },
  },
});

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <Component history={history} />
        </Provider>
      </MuiThemeProvider>
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
}

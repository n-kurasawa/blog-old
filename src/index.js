import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { grey, blueGrey } from 'material-ui/colors';
import { AppContainer } from 'react-hot-loader';
import 'babel-polyfill';
import 'url-search-params-polyfill';

import reducer from 'reducers';
import App from './App';
import ArticleApi from 'articleApi';

const history = createHistory();
const thunkWithClient = thunk.withExtraArgument(new ArticleApi());
const store = createStore(reducer, applyMiddleware(thunkWithClient));

const theme = createMuiTheme({
  palette: {
    primary: {
      ...grey,
      500: '#fff',
    },
    secondary: {
      ...blueGrey,
    },
  },
  typography: {
    fontFamily:
      '"Playfair Display", "Hiragino Mincho ProN", serif, Helvetica, Arial, sans-serif',
    body1: {
      fontSize: 18,
      fontFamily: '"Hiragino Mincho ProN", serif, Helvetica, Arial, sans-serif',
    },
  },
});

ReactDOM.render(
  <AppContainer>
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </MuiThemeProvider>
  </AppContainer>,
  document.getElementById('root'),
);

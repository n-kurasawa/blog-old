/*globals module: false */
import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { load } from 'reducers/article';

import Header from 'components/Header';
import ArticleList from 'components/ArticleList';
import Article from 'components/Article';
import Profile from 'components/Profile';
import styles from './App.css';

class App extends React.Component {
  componentDidMount() {
    this.props.load();
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <div className={styles.container}>
            <Switch>
              <Route exact path="/" component={ArticleList} />
              <Route exact path="/articles" component={ArticleList} />
              <Route path="/articles/:id" component={Article} />
              <Route path="/profile" component={Profile} />
            </Switch>
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default connect(null, { load })(hot(module)(App));

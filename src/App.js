import React from 'react';
import { ConnectedRouter as Router } from 'react-router-redux';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { load } from 'actions/article-actions';

import Header from 'components/Header';
import ArticleList from 'components/ArticleList';
import Article from 'components/Article';

const styles = {
  margin: '90px auto',
  width: '60%',
};

@connect(null, { load })
class App extends React.Component {
  componentDidMount() {
    this.props.load();
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div style={styles}>
          <Router history={this.props.history}>
            <Route component={AppRoute} />
          </Router>
        </div>
      </React.Fragment>
    );
  }
}

const AppRoute = () => (
  <Switch>
    <Route exact path="/" component={ArticleList} />
    <Route exact path="/articles" component={ArticleList} />
    <Route path="/articles/:id" component={Article} />
  </Switch>
);

export default App;

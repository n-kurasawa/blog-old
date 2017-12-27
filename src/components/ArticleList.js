import React from 'react';
import { Typography } from 'material-ui';
import { connect } from 'react-redux';

const ArticleList = connect(state => state.article)(({ articles }) => (
  <React.Fragment>
    <Typography type="display1">Blog Posts</Typography>
    {articles.map(article => <Article key={article.id} {...article} />)}
  </React.Fragment>
));

const styles = {
  article: {
    marginTop: '50px',
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    marginLeft: '50px',
  },
};

const Article = ({ title, date }) => (
  <div style={styles.article}>
    <Typography style={styles.date}>{date}</Typography>
    <Typography style={styles.title} type="headline">
      {title}
    </Typography>
  </div>
);

export default ArticleList;

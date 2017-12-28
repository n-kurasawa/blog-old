import React from 'react';
import { Link } from 'react-router-dom';
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

const Article = ({ id, title, date }) => (
  <div style={styles.article}>
    <Link to={`/articles/${id}`}>
      <Typography style={styles.date}>{date}</Typography>
    </Link>
    <Link to={`/articles/${id}`}>
      <Typography style={styles.title} type="headline">
        {title}
      </Typography>
    </Link>
  </div>
);

export default ArticleList;

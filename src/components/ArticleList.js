import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from 'material-ui';
import { connect } from 'react-redux';
import styles from './ArticleList.css';

const ArticleList = connect(state => state.article)(({ articles }) => (
  <React.Fragment>
    <Typography type="display1">Blog Posts</Typography>
    {articles.map(article => {
      if (article === null) {
        return;
      }
      return <Article key={article.id} {...article} />;
    })}
  </React.Fragment>
));

const Article = ({ id, title, date }) => (
  <div className={styles.article}>
    <Link to={`/articles/${id}`}>
      <Typography>{date}</Typography>
    </Link>
    <Link to={`/articles/${id}`}>
      <Typography type="headline">
        <div className={styles.title}>{title}</div>
      </Typography>
    </Link>
  </div>
);

export default ArticleList;

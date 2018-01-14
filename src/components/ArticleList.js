import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from 'material-ui';
import { connect } from 'react-redux';
import styles from './ArticleList.css';

const mapStateToProps = state => {
  const articles = state.article.articles.filter(article => article !== null);
  articles.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

  return { articles };
};

const ArticleList = connect(mapStateToProps)(({ articles }) => (
  <React.Fragment>
    <Typography type="display1">
      <div className={styles.posts}>Blog Posts</div>
    </Typography>
    {articles.map(article => <Article key={article.id} {...article} />)}
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

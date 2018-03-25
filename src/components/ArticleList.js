import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from 'material-ui';
import { connect } from 'react-redux';
import styles from './ArticleList.css';
import Tags from './Tags';

const mapStateToProps = state => {
  const articles = Object.values(state.article.articles).filter(
    article => article !== null,
  );
  articles.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

  return { articles };
};

function getTag(location) {
  return new URLSearchParams(location.search).get('tag');
}

// TODO: stateでlocationを管理して mapStateToProps で処理する?
const makeArticle = (articles, location) =>
  articles
    .filter(article => article.tags.includes(getTag(location) || ''))
    .map(article => <Article key={article.id} {...article} />);

const ArticleList = connect(mapStateToProps)(({ articles, location }) => (
  <React.Fragment>
    <Typography type="display1">
      <div className={styles.posts}>Blog Posts</div>
    </Typography>
    {makeArticle(articles, location)}
  </React.Fragment>
));

const Article = ({ id, title, date, tags }) => (
  <div>
    <div className={styles.article}>
      <Link to={`/articles/${id}`}>
        <Typography>{date}</Typography>
      </Link>
      <div className={styles.title}>
        <Link to={`/articles/${id}`}>
          <Typography type="headline">
            <div>{title}</div>
          </Typography>
        </Link>
        <div className={styles.tags}>
          <Tags values={tags} />
        </div>
      </div>
    </div>
  </div>
);

export default ArticleList;

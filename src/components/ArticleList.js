import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from 'material-ui';
import { connect } from 'react-redux';
import styled from 'styled-components';
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
      <Posts>Blog Posts</Posts>
    </Typography>
    {makeArticle(articles, location)}
  </React.Fragment>
));

const Article = ({ id, title, date, tags }) => (
  <Wrapper>
    <Link to={`/articles/${id}`}>
      <Typography>{date}</Typography>
    </Link>
    <Title>
      <Link to={`/articles/${id}`}>
        <Typography type="headline">
          <div>{title}</div>
        </Typography>
      </Link>
      <Tag>
        <Tags values={tags} />
      </Tag>
    </Title>
  </Wrapper>
);

const Wrapper = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    margin-top: 15px;
    display: block;
  }
`;

const Title = styled.div`
  margin-left: 50px;
  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

const Tag = styled.div`
  margin-top: 5px;
`;

const Posts = styled.div`
  @media screen and (max-width: 768px) {
    font-size: 26px;
  }
`;

export default ArticleList;

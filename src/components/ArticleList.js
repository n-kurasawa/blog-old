import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from 'material-ui';
import styled from 'styled-components';
import Tags from './Tags';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

function getTag(location) {
  return new URLSearchParams(location.search).get('tag');
}

// TODO: stateでlocationを管理して mapStateToProps で処理する?
const makeArticle = (list, location) => {
  if (list.loading) {
    return [];
  }
  return list.articles
    .filter(article => article.tags.includes(getTag(location) || ''))
    .map(article => <Article key={article.id} {...article} />);
};

const ArticleList = ({ location, list }) => (
  <React.Fragment>
    <Typography type="display1">
      <Posts>Blog Posts</Posts>
    </Typography>
    {makeArticle(list, location)}
  </React.Fragment>
);

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

const LIST = gql`
  query articles {
    articles {
      id
      title
      tags
      date
    }
  }
`;

export default graphql(LIST, {
  name: 'list',
})(ArticleList);

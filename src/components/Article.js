import React from 'react';
import { Typography, Divider } from 'material-ui';
import { connect } from 'react-redux';
import remark from 'remark';
import reactRenderer from 'remark-react';
import breaksRenderer from 'remark-breaks';
import emojiRenderer from 'remark-emoji';
import RemarkLowlight from 'remark-react-lowlight';
import js from 'highlight.js/lib/languages/javascript';
import Tags from './Tags';
import styled from 'styled-components';

const processor = remark()
  .use(breaksRenderer)
  .use(reactRenderer, {
    remarkReactComponents: {
      code: RemarkLowlight({ js }),
    },
  })
  .use(emojiRenderer);

const Article = connect(state => state.article)(({ articles, match }) => {
  const article = articles[match.params.id];
  if (!article) {
    return <div />;
  }

  return (
    <article>
      <ArticleInfo>
        <Typography>{article.date}</Typography>
      </ArticleInfo>
      <Typography type="title">
        <Title>{article.title}</Title>
      </Typography>
      <TitleDivider />
      <Tags values={article.tags} />
      <div>
        {
          processor.processSync(article.contents, {
            breaks: true,
            gfm: true,
          }).contents
        }
      </div>
    </article>
  );
});

const ArticleInfo = styled.div`
  margin: 10px 0 10px 0;
`;

const Title = styled.div`
  font-size: 25px;
`;

const TitleDivider = styled(Divider)`
  margin: 10px 0 10px 0 !important;
`;

export default Article;

import React from 'react';
import { Typography, Divider } from 'material-ui';
import { connect } from 'react-redux';
import remark from 'remark';
import reactRenderer from 'remark-react';
import breaksRenderer from 'remark-breaks';
import emoji from 'remark-emoji';
import RemarkLowlight from 'remark-react-lowlight';
import js from 'highlight.js/lib/languages/javascript';
import styles from './Article.css';

const processor = remark()
  .use(breaksRenderer)
  .use(reactRenderer, {
    remarkReactComponents: {
      code: RemarkLowlight({ js }),
    },
  })
  .use(emoji);

const Article = connect(state => state.article)(({ articles, match }) => {
  const article = articles[match.params.id];
  if (!article) {
    return <div />;
  }

  return (
    <div>
      <article>
        <div className={styles.articleInfo}>
          <Typography>{article.date}</Typography>
        </div>
        <Typography type="title">
          <div className={styles.title}>{article.title}</div>
        </Typography>
        <Divider className={styles.divider} />
        <div>
          {
            processor.processSync(article.contents, {
              breaks: true,
              gfm: true,
            }).contents
          }
        </div>
      </article>
    </div>
  );
});

export default Article;

import React from 'react';
import { Typography, Divider } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import remark from 'remark';
import reactRenderer from 'remark-react';
import breaksRenderer from 'remark-breaks';
import RemarkLowlight from 'remark-react-lowlight';
import js from 'highlight.js/lib/languages/javascript';
import './Article.css';

const styles = theme => ({
  articleInfo: {
    margin: '10px 0 10px 0',
  },
  title: {
    fontSize: 25,
  },
  divider: {
    margin: '10px 0 20px 0',
  },
});

const processor = remark()
  .use(breaksRenderer)
  .use(reactRenderer, {
    remarkReactComponents: {
      code: RemarkLowlight({ js }),
    },
  });

const Article = connect(state => state.article)(
  ({ articles, classes, match }) => {
    const article = articles[match.params.id];
    if (!article) {
      return <div />;
    }

    return (
      <div>
        <article>
          <div className={classes.articleInfo}>
            <Typography>{article.date}</Typography>
          </div>
          <Typography className={classes.title} type="title">
            {article.title}
          </Typography>
          <Divider className={classes.divider} />
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
  },
);

export default withStyles(styles)(Article);

import React from 'react';
import { Typography, Divider } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';

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
          <Typography type="body1">{article.contents}</Typography>
        </article>
      </div>
    );
  },
);

export default withStyles(styles)(Article);

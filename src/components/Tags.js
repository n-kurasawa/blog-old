import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Chip from 'material-ui/Chip';
import { select } from '../reducers/tag';
import styles from './Tags.css';

const Tags = connect(null, { select })(({ select, values }) => (
  <div className={styles.root}>
    {values &&
      values.split(' ').map((tag, index) => (
        <Link key={index} to={`/articles?tag=${tag}`}>
          <Chip
            className={styles.tag}
            label={tag}
            onClick={() => {
              select(tag);
            }}
          />
        </Link>
      ))}
  </div>
));

export default Tags;

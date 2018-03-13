import React from 'react';
import { connect } from 'react-redux';
import Chip from 'material-ui/Chip';
import { select } from '../reducers/tag';
import styles from './Tags.css';

const Tags = connect(null, { select })(({ select, values }) => (
  <div className={styles.root}>
    {values &&
      values.split(' ').map((tag, index) => (
        <Chip
          className={styles.tag}
          key={index}
          label={tag}
          onClick={() => {
            select(tag);
          }}
        />
      ))}
  </div>
));

export default Tags;

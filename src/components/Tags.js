import React from 'react';
import Chip from 'material-ui/Chip';
import styles from './Tags.css';

const Tags = ({ tags }) => (
  <div className={styles.root}>
    {tags
      .split(' ')
      .map((tag, index) => (
        <Chip className={styles.tag} key={index} label={tag} />
      ))}
  </div>
);

export default Tags;

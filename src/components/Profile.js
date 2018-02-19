import React from 'react';
import { Typography } from 'material-ui';
import styles from './Profile.css';

const Profile = () => (
  <div>
    <Typography type="title">Profile</Typography>
    <div className={styles.content}>
      <div>
        <Typography>github</Typography>
        <a href="https://github.com/n-kurasawa">
          https://github.com/n-kurasawa
        </a>
      </div>
      <div className={styles.section}>
        <Typography>twitter</Typography>
        <a href="https://twitter.com/k_7016">https://twitter.com/k_7016</a>
      </div>
    </div>
  </div>
);

export default Profile;

import React from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Toolbar, Typography, IconButton } from 'material-ui';
import { AccountCircle } from 'material-ui-icons';

import styles from './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showShadow: false };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 0) {
      this.setState({ showHeader: true });
    } else {
      this.setState({ showHeader: false });
    }
  }

  render() {
    let style;
    if (!this.state.showHeader) {
      style = { boxShadow: '0 0 0 0' };
    }

    return (
      <AppBar className={styles.root} style={style} position="fixed">
        <Toolbar>
          <Link to="/" className={styles.link}>
            <Typography type="title">K7016 Tech Blog</Typography>
          </Link>
          <Link to="/profile">
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;

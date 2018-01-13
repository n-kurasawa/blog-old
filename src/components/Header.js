import React from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Toolbar, Typography } from 'material-ui';

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
      <AppBar style={style} position="fixed">
        <Toolbar>
          <Link to="/">
            <Typography type="title">K7016 Tech Blog</Typography>
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;

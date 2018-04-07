import React from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Toolbar, Typography, IconButton } from 'material-ui';
import { AccountCircle } from 'material-ui-icons';
import styled from 'styled-components';

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
          <LinkWrapper to="/">
            <Typography type="title">K7016 Tech Blog</Typography>
          </LinkWrapper>
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

const LinkWrapper = styled(Link)`
  flex: 1;
`;

export default Header;

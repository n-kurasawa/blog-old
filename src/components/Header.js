import React from 'react';
import { withStyles } from 'material-ui/styles';

import { AppBar, Toolbar, Typography } from 'material-ui';

const styles = theme => ({
  appBar: {
    backgroundColor: '#fff',
  },
});

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
    if (document.documentElement.scrollTop > 0) {
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
      <AppBar
        style={style}
        className={this.props.classes.appBar}
        position="fixed"
      >
        <Toolbar>
          <Typography type="title">K7016 Tech Blog</Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);

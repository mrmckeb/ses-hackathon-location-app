import React, { Component } from 'react';

// Components
import { AppBar, IconButton, IconMenu, MenuItem, Popover } from 'material-ui';
// Colors
import { blue900 } from 'material-ui/styles/colors';
// Icons
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

export default class CustomAppBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleTouchTap(event) {
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  render() {
    const sesLogo = <img src='public/ses-logo.svg' style={{ height: '30px', marginTop: '16px' }} />;
    return (
      <AppBar
        showMenuIconButton={false}
        iconElementRight={
          <IconMenu
            iconButtonElement={
              <IconButton><MoreVertIcon /></IconButton>
            }
            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Help" />
            <MenuItem primaryText="Sign out" />
          </IconMenu>
        }
        onRightIconButtonTouchTap={this.handleTouchTap.bind(this) }
        title={sesLogo}
        style={{ backgroundColor: blue900 }}>
      </AppBar>
    );
  }

}

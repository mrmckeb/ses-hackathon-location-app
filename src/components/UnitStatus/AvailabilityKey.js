import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';

// Icons
import Help from 'material-ui/svg-icons/action/help';
import Warning from 'material-ui/svg-icons/alert/warning';
import Done from 'material-ui/svg-icons/action/done';
// Colors
import { grey500, blue700, deepOrange500 } from 'material-ui/styles/colors';

const iconStyles = {
  position: 'absolute',
  marginTop: '-50px',
  left: '178px'
};

const labelStyles = {
  color: blue700
};

const iconKeyStyles = {
  float: 'left',
  marginRight: '12px',
  marginTop: '2px',
  height: '15px',
};

export default class DialogExampleSimple extends React.Component {

  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  handleOpen () {
    this.setState({ open: true });
  };

  handleClose () {
    this.setState({ open: false });
  };

  render() {
    const actions = [
      <FlatButton
        label="Got it"
        primary={true}
        onTouchTap={this.handleClose.bind(this)}
        labelStyle={labelStyles}
        />
    ];

    return (
      <div>
        <IconButton style={iconStyles} onTouchTap={this.handleOpen.bind(this)}>
          <Help color={grey500} />
        </IconButton>
        <Dialog
          title="Availability key"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose.bind(this)}
        >
          The following icons indicate distance from HQ:
          <p>
            <Done style={iconKeyStyles} color={grey500} /> Less than 10 minutes away
          </p>
          <p>
            <Warning style={iconKeyStyles} color={grey500} /> 10 - 20 minutes away
          </p>
          <p>
            <Warning style={iconKeyStyles} color={deepOrange500} /> More than 20 minutes away
          </p>
        </Dialog>
      </div>
    );
  }
}

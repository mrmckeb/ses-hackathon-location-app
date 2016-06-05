import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import ContactRow from '../shared/ContactRow'
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';

// Icons
import Done from 'material-ui/svg-icons/action/done';
import Close from 'material-ui/svg-icons/navigation/close';
// Colors
import { red800, green400, green600 } from 'material-ui/styles/colors';

import { serverAddress } from '../../config/config';

const styles = {
  margin: '0 0 20px'
};

const titleStyle = {
  fontSize: '20px',
};

const subtitleStyle = {
  fontSize: '14px',
  marginTop: '6px'
};

const iconStyle = {
  float: 'right',
  marginTop: '16px',
  marginRight: '16px',
  transition: 'background-color .15s ease'
};

export default class ProfileCard extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      available: true
    }
  }

  componentWillMount () {
    this.postData(this.state.available);
  }

  clickHandler () {
    let available = true;
    if (this.state.available) {
      available = false;
    }

    this.setState({
      available
    });

    this.postData(available);
  }

  postData (isAvailable) {
    fetch(`https://${serverAddress}/api/1/user/lbrynn`,
      {
        method: 'POST',
        mode: 'cors',
        headers: new Headers({
          'Content-Type': 'application/x-www-form-urlencoded'
        }),
        body: `available=${isAvailable}`
      });
  }

  render () {
    const isAvailable = this.state.available;
    return (
      <Card style={styles}>
        <Avatar icon={isAvailable ? <Done /> : <Close />} size={60} style={iconStyle} backgroundColor={isAvailable ? green400 : red800} />
        <CardHeader
          title={isAvailable ? 'Currently available' : 'Currently unavailable'}
          titleStyle={titleStyle}
          subtitle={isAvailable ?
            'You\'ve told us that you\'re available until 9:00pm today.' :
            'You\'ve told us that you\'re not available until 8:00am tomorrow.'
          }
          subtitleStyle={subtitleStyle}
          />
        <CardActions>
          {isAvailable ?
            <FlatButton onClick={this.clickHandler.bind(this)} label="I'm no longer available" style={{color: red800}} /> :
            <FlatButton onClick={this.clickHandler.bind(this)} label="I'm available" style={{color: green600}} />
          }
        </CardActions>
      </Card>
    );
  }

}

import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ContactRow from '../shared/ContactRow'

// Colors
import { blue700 } from 'material-ui/styles/colors';

const styles = {
  margin: '0 0 20px'
};

const avatarStyle = {
  width: '64px',
  borderRadius: '50%',
  float: 'left',
  margin: '16px'
};

const titleStyle = {
  fontSize: '20px',
  marginTop: '10px'
};

const subtitleStyle = {
  fontSize: '14px',
  marginTop: '6px'
};

const ProfileCard = () => (
  <Card style={styles}>
    <img style={avatarStyle} src="/public/lisa-brynn.jpg" />
    <CardHeader
      title="Lisa Brynn"
      titleStyle={titleStyle}
      subtitle="Duty Officer, Wollongong Unit"
      subtitleStyle={subtitleStyle}
      />
    <CardText>
      <ContactRow type="Phone" value="0411 733 893" />
      <ContactRow type="Email" value="lisab@gmail.com" />
      <ContactRow type="Address" value="20 Longbeach Road, Wollongong, NSW 2500" />
    </CardText>
    <CardActions>
      <FlatButton label="Update my profile" labelStyle={{color: blue700 }} />
    </CardActions>
  </Card>
);

export default ProfileCard;

import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import ContactRow from '../shared/ContactRow'

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

const ProfileCard = () => (
  <Card style={styles}>
    <CardHeader
      title="Wollongong Unit"
      titleStyle={titleStyle}
      subtitle="Montague Street, North Wollongong NSW 2500"
      subtitleStyle={subtitleStyle}
      />
    <CardText>
      <ContactRow type="Controller" value="Michael Douglas (0424 555 222)" />
      <ContactRow type="Dep. Controller" value="Sarah Johnston (0433 225 220)" />
    </CardText>
  </Card>
);

export default ProfileCard;

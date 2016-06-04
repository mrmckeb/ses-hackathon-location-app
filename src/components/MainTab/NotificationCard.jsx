import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';

// Icons
import Notifications from 'material-ui/svg-icons/social/notifications';

const styles = {
  margin: '20px 0'
}

const NotificationCard = () => (
  <Card style={styles}>
    <CardHeader
      avatar={<Avatar icon={<Notifications />} />}
      title="Nothing to report"
      subtitle="No new or urgent notifications"
    />
  </Card>
);

export default NotificationCard;

import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';

// Icons
import NewReleases from 'material-ui/svg-icons/av/new-releases';
import Expiring from 'material-ui/svg-icons/action/hourglass-full';
// Colors
import { red800, blue700 } from 'material-ui/styles/colors';

const styles = {
  margin: '20px 0'
};

const labelStyles = {
  color: blue700
};

export default class QualificationCard extends React.Component {

  render() {
    return (
      <Card style={styles}>
        <CardHeader
          avatar={this.props.expiring ?
            <Avatar backgroundColor={red800} icon={<Expiring />} /> :
            <Avatar backgroundColor={blue700} icon={<NewReleases />} />}
          title={this.props.title}
          subtitle={this.props.subtitle}
          actAsExpander={true}
          showExpandableButton={true}
          />
        <CardText expandable={true}>
          {this.props.text}
        </CardText>
        <CardActions expandable={true}>
          {this.props.expiring ?
            <FlatButton label="Renew qualification" labelStyle={labelStyles} /> :
            <FlatButton label="Sign up for course" labelStyle={labelStyles} />}
        </CardActions>
      </Card>
    );
  }

}

import React, { Component } from 'react';

// Components
import NotificationCard from './NotificationCard';
import ProfileCard from './ProfileCard';
import QualificationCard from './QualificationCard';

const styles = {
  padding: '25px'
};

const headingStyles = {
  fontSize: 24,
  marginBottom: 12,
  fontWeight: 400,
};

export default class MainTab extends Component {

  render() {
    return (
      <main style={styles}>
        <ProfileCard />
        <h2 style={headingStyles}>Notifications</h2>
        <NotificationCard />
        <h2 style={headingStyles}>Qualifications</h2>
        <QualificationCard
          expiring={true}
          title="Action required: First Aid"
          subtitle="Certification expiring on 31 July, 2016."
          text="Your First Aid certification is expiring soon. Click the renew button below to sign up for a renewal course."
        />
        <QualificationCard
          expiring={false}
          title="New eligible course: Vertical Rescue"
          subtitle="Starting from 1 August, 2016."
          text="The Vertical Rescue course is designed for anyone who may be required to perform rope-based rescues to extract injured personnel from difficult to access terrain."
        />
      </main>
    );
  }

}

import React, { Component } from 'react';

// Components
import HQCard from './HQCard';
import AvailabilityTable from './AvailabilityTable';

const styles = {
  padding: '25px'
};

const headingStyles = {
  fontSize: 24,
  marginBottom: 12,
  fontWeight: 400,
};

export default class UnitStatus extends Component {

  render() {
    return (
      <main style={styles}>
        <HQCard />
        <h2 style={headingStyles}>Unit availability</h2>
        <AvailabilityTable />
      </main>
    );
  }

}

import React, { Component } from 'react';

// Components
import CurrentAvailability from './CurrentAvailability';

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
        <CurrentAvailability />
      </main>
    );
  }

}

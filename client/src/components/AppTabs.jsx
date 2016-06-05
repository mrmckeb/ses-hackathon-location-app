import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

// Components
import { Tab, Tabs } from 'material-ui';
import MainTab from './MainTab/MainTab';
import UnitStatus from './UnitStatus/UnitStatus';
import Availability from './Availability/Availability';
// Colors
import { blue700, deepOrange500 } from 'material-ui/styles/colors';

const styles = {
  backgroundColor: blue700
};

export default class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  componentDidMount () {
    const node = findDOMNode(this);
    const topOffset = node.offsetTop + node.offsetHeight;
    this.setState({
      topOffset,
      opacity: 1
    });
  }

  handleChange (value) {
    this.setState({
      value: value,
    });
  }

  render() {

    const containerStyles = {
      position: 'absolute',
      overflowY: 'scroll',
      overflowX: 'hidden',
      WebkitOverflowScrolling: 'touch',
      opacity: this.state.opacity || 0,
      transition: 'opacity .5s 0.2s ease',
      top: this.state.topOffset || '112px',
      left: 0,
      bottom: 0,
      right: 0
    };

    return (
      <Tabs
        inkBarStyle={{backgroundColor: deepOrange500}}
        value={this.state.value}
        onChange={this.handleChange.bind(this)}
        contentContainerStyle={containerStyles}
      >
        <Tab style={styles} label="My SES" value="a" >
          <MainTab />
        </Tab>
        <Tab style={styles} label="My availability" value="b">
          <Availability />
        </Tab>
        <Tab style={styles} label="Unit status" value="c">
          <UnitStatus />
        </Tab>
      </Tabs>
    );
  }

}

import React, { Component } from 'react';

// Components
import { Tabs, Tab } from 'material-ui';
import MainTab from './MainTab/MainTab';
import UnitStatus from './UnitStatus/UnitStatus';
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

  handleChange (value) {
    this.setState({
      value: value,
    });
  }

  render() {

    return (
      <Tabs inkBarStyle={{backgroundColor: deepOrange500}} value={this.state.value} onChange={this.handleChange.bind(this)}>
        <Tab style={styles} label="My SES" value="a" >
          <MainTab />
        </Tab>
        <Tab style={styles} label="My availability" value="b">
          Tab 2
        </Tab>
        <Tab style={styles} label="Unit status" value="c">
          <UnitStatus />
        </Tab>
      </Tabs>
    );
  }

}

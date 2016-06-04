import React from 'react';
import Paper from 'material-ui/Paper';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

// Icons
import Warning from 'material-ui/svg-icons/alert/warning';
import Done from 'material-ui/svg-icons/action/done';
// Colors
import { grey500, deepOrange500 } from 'material-ui/styles/colors';

const iconStyles = {
  float: 'left',
  marginRight: '12px',
  height: '16px',
};

const getIconForStatus = (distance) => {
  if (distance > 600) {
    return <Warning style={iconStyles} color={deepOrange500} />;
  } else if (distance > 400) {
    return <Warning style={iconStyles} color={grey500} />;
  } else {
    return <Done style={iconStyles} color={grey500} />;
  }
}

export default class AvailabilityTable extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      unitAvailabilityData: []
    };
  }

  componentWillMount () {
    // HOOK UP SOCKET IO
  }

  fetchData () {
    // fetch('https://192.168.1.74:3000/api/1/unit/wollongong/all')
    //   .then((response) => response.json())
    //   .then((result) => {
    //     this.setState({
    //       unitAvailabilityData: result.unit
    //     });
    //   });
  }

  render () {
    return (
      <Paper>
        // ADD FEATURE TO SHOW ALL MEMBERS
        <Table selectable={false} multiSelectable={false}>
          <TableHeader displaySelectAll={false}
                  adjustForCheckbox={false}
                  enableSelectAll={false}>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Status / Distance from HQ</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.state.unitAvailabilityData.map((member, index) =>
              <TableRow key={index}>
                <TableRowColumn>
                  {member.username}<br />
                  <span style={{color:grey500}}>{member.rank}</span>
                </TableRowColumn>
                <TableRowColumn>
                  {getIconForStatus(member.distance)}
                  {member.distance / 60} minutes
                </TableRowColumn>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    );
  }

}

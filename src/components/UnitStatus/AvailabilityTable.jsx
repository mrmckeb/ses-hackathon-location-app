import React from 'react';
import Paper from 'material-ui/Paper';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import socketio from '../helpers/socket-io';
import nameMap from '../helpers/name-map';

const serverAddress = '192.168.1.74:3000';
const socket = socketio(serverAddress);

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
  if (distance > 1200) {
    return <Warning style={iconStyles} color={deepOrange500} />;
  } else if (distance > 600) {
    return <Warning style={iconStyles} color={grey500} />;
  } else {
    return <Done style={iconStyles} color={grey500} />;
  }
}

        // <div style={keyStyles}>
        //   <span>{getIconForStatus(0)} 0 - 10 minutes</span>
        //   <span>{getIconForStatus(601)} 10 - 20 minutes</span>
        //   <span>{getIconForStatus(1201)} 20+ minutes</span>
        // </div>

const keyStyles = {
  fontSize: '12px',
  color: 'rgb(158, 158, 158)'
}

export default class AvailabilityTable extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      unitAvailabilityData: []
    };
  }

  componentWillMount () {
    this.poller = setInterval(() => this.fetchData(), 2000);
  }

  fetchData () {
    fetch(`https://${serverAddress}/api/1/unit/wollongong/all?available=true`)
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          unitAvailabilityData: result.unit
        });
      });
  }

  render () {
    return (
      <Paper>
        <div style={{clear: 'both'}} />
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
            {this.state.unitAvailabilityData
              .sort((a, b) => parseInt(a.distance) > parseInt(b.distance))
              .map(nameMap)
              .map((member, index) =>
              <TableRow key={index}>
                <TableRowColumn>
                  {member.name}<br />
                  <span style={{color:grey500}}>{member.rank}</span>
                </TableRowColumn>
                <TableRowColumn>
                  {getIconForStatus(member.distance)}
                  {(member.distance > 60) ? `${Math.ceil(member.distance / 60)} minutes` : 'At Unit HQ'}
                </TableRowColumn>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    );
  }

}

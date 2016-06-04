import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

// Icons
import Warning from 'material-ui/svg-icons/alert/warning';
import Done from 'material-ui/svg-icons/action/done';
// Colors
import { grey500, deepOrange500 } from 'material-ui/styles/colors';

const unitAvailabilityData = [
  {
    id: 1,
    name: 'John Smith',
    rank: '',
    distance: 300
  },
  {
    id: 2,
    name: 'Jane Smith',
    rank: 'Team Leader',
    distance: 120
  },
  {
    id: 3,
    name: 'Peter Smith',
    rank: '',
    distance: 420
  },
  {
    id: 4,
    name: 'Sam Smith',
    rank: 'Dep. Officer',
    distance: 660
  }
];

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

const AvailabilityTable = () => (
  <Table selectable={false} multiSelectable={false}>
    <TableHeader displaySelectAll={false}
            adjustForCheckbox={false}
            enableSelectAll={false}>
      <TableRow>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Rank</TableHeaderColumn>
        <TableHeaderColumn>Status / Distance from HQ</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
      {unitAvailabilityData.map((member, index) =>
        <TableRow key={index}>
          <TableRowColumn>{member.name}</TableRowColumn>
          <TableRowColumn>{member.rank}</TableRowColumn>
          <TableRowColumn>
            {getIconForStatus(member.distance)}
            {member.distance / 60} minutes
          </TableRowColumn>
        </TableRow>
      )}
    </TableBody>
  </Table>
);

export default AvailabilityTable;
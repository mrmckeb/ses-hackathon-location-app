import React from 'react';

const typeStyles = {
  display: 'inline-block',
  width: '150px',
  marginBottom: '4px'
};

const valueStyles = {
  display: 'inline-block',
  width: '100%'
};

export default class ContactRow extends React.Component {

  render () {
    return (
      <div style={{display: 'flex'}}>
        <span style={typeStyles}>{this.props.type}:</span>
        <span style={valueStyles}>{this.props.value}</span>
      </div>
    );
  }

}

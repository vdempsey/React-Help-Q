import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props){
  return (
    <div>
      <style jsx>{`
        div {
          background-color: #e0f5fc;
          padding: 20px;
        }
        div:nth-child(odd) {
          background-color: #cbe6ef;
        }
      `}</style>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Ticket;

import React from 'react';
import PropTypes from 'prop-types';

function Memory(props) {
  return (
    <div onClick={() => props.onMemorySelection(props.id)}>
      <h3>{props.title}</h3>
      <p><em>Date: </em>{props.date.toDate().toLocaleDateString('en-US')}</p>
      <p><em>Description: </em>{props.description}</p>
    </div>
  );
}

// dateExample: new Date("December 10, 1815"),
// date: PropTypes.instanceOf(Date)
Memory.propTypes = {
  onMemorySelection: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.object,
  id: PropTypes.string
};

export default Memory;
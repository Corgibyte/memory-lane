import React from 'react';
import PropTypes from 'prop-types';
import { withFirestore } from 'react-redux-firebase';
import EditForm from './EditForm';

function MemoryDetail(props) {

  const handleDeletingMemory = (id) => {
    props.firestore.delete({ collection: 'memories', doc: id });
    props.onMemoryDelete();
  }

  return (
    <React.Fragment>
      <h2>Memory Detail</h2>
      <h3>{props.memory.title}</h3>
      <p><em>Date: </em>{props.memory.date.toDate().toLocaleDateString('en-US')}</p>
      <p><em>Description: </em>{props.memory.description}</p>
      <button onClick={() => handleDeletingMemory(props.memory.id)}>Forget this memory</button>
      <EditForm memory={props.memory}
        onEditSubmission={props.onMemoryEdit} />
    </React.Fragment>
  );
}

MemoryDetail.propTypes = {
  memory: PropTypes.object,
  onMemoryDelete: PropTypes.func,
  onMemoryEdit: PropTypes.func
}

export default withFirestore(MemoryDetail);
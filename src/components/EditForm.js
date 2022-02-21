import React, { useState } from 'react';
import ReusableForm from './ReusableForm';
import { useFirestore } from 'react-redux-firebase';
import PropTypes from 'prop-types';

function EditForm(props) {

  const [isFormVisible, setFormVisible] = useState(false);
  const firestore = useFirestore();

  const updateMemoryInFirestore = (event) => {
    event.preventDefault();
    setFormVisible(!isFormVisible);
    const propertiesToUpdate = {
      title: event.target.title.value,
      description: event.target.description.value,
      date: new Date(event.target.date.value)
    }
    firestore.update({ collection: 'memories', doc: props.memory.id }, propertiesToUpdate);
    props.onEditSubmission(props.memory.id);
  }

  return (
    <React.Fragment>
      {isFormVisible ?
        <div>
          <ReusableForm formSubmissionHandler={updateMemoryInFirestore}
            memory={props.memory} />
          <button onClick={() => setFormVisible(!isFormVisible)}>Cancel</button>
        </div>
        : <button onClick={() => setFormVisible(!isFormVisible)}>Edit</button>
      }
    </React.Fragment>
  )
}

EditForm.propTypes = {
  memory: PropTypes.object,
  onEditSubmission: PropTypes.func
}

export default EditForm;
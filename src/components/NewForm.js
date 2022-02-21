import React, { useState } from 'react';
import ReusableForm from './ReusableForm';
import { useFirestore } from 'react-redux-firebase';

function NewForm(props) {

  const [isFormVisible, setFormVisible] = useState(false);
  const firestore = useFirestore();

  const addMemoryToFirestore = (event) => {
    event.preventDefault();
    setFormVisible(!isFormVisible);
    return firestore.collection('memories').add(
      {
        title: event.target.title.value,
        description: event.target.description.value,
        date: new Date(event.target.date.value)
      }
    );
  }
  return (
    <React.Fragment>

      {isFormVisible ?
        <div>
          <ReusableForm formSubmissionHandler={addMemoryToFirestore}
            memory={null} />
          <button onClick={() => setFormVisible(!isFormVisible)}>Cancel</button>
        </div>
        : <button onClick={() => setFormVisible(!isFormVisible)}>Add Memory</button>
      }
    </React.Fragment>
  )
}

export default NewForm;
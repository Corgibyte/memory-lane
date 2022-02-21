import React from 'react';
import PropTypes from "prop-types";
import Memory from "./Memory";
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

function MemoryList(props) {
  useFirestoreConnect([
    { collection: 'memories' }
  ]);

  const memories = useSelector(state => state.ordered.memories);

  if (isLoaded(memories)) {
    return (
      <React.Fragment>
        {memories.map((memory) => {
          return <Memory
            onMemorySelection={props.onMemorySelection}
            description={memory.description}
            title={memory.title}
            date={memory.date}
            id={memory.id}
            key={memory.id}
          />
        })}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}

MemoryList.propTypes = {
  onMemorySelection: PropTypes.func
}

export default MemoryList;
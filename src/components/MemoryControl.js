import React, { useState } from 'react';
import NewForm from './NewForm';
import MemoryList from './MemoryList';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withFirestore } from 'react-redux-firebase'

class MemoryControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMemory: null
    };
  }

  handleChangingMemorySelection = (id) => {
    this.props.firestore.get({ collection: 'memories', doc: id }).then((memory) => {
      const firestoreMemory = {
        title: memory.get("title"),
        description: memory.get("description"),
        date: memory.get("date")
      }
      this.setState({ selectedMemory: firestoreMemory });
    })
  }

  //TODO change what's visible based on selectedMemory

  render() {
    return (
      <React.Fragment>
        <NewForm />
        <MemoryList onMemorySelection={this.handleChangingMemorySelection} />
      </React.Fragment>
    )
  }
}

export default withFirestore(MemoryControl);
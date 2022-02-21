import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  let titleValue = null;
  let descriptionValue = null;
  let dateValue = null;
  if (props.memory !== null) {
    titleValue = props.memory.title;
    descriptionValue = props.memory.description;
    dateValue = props.memory.date.toDate().toISOString().substr(0, 10);
  }
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='title'
          placeholder='Memory title'
          defaultValue={titleValue} />
        <input
          type='date'
          name='date'
          placeholder='Date of memory'
          defaultValue={dateValue} />
        <textarea
          name='description'
          placeholder='Description.'
          defaultValue={descriptionValue} />
        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  memory: PropTypes.object
};

export default ReusableForm;
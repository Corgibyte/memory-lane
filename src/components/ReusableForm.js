import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='title'
          placeholder='Memory title' />
        <input
          type='date'
          name='date'
          placeholder='Date of memory' />
        <textarea
          name='description'
          placeholder='Description.' />
        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
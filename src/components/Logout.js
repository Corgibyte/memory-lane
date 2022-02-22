import React from 'react';
import firebase from 'firebase/compat/app';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  function doSignout() {
    firebase.auth().signOut().then(function () {
      navigate("/");
    }).catch(function (error) {
      console.log(error.message);
    });
  };

  return (
    <React.Fragment>
      <h3>Are you sure you want to logout?</h3>
      <button onClick={doSignout}>Logout</button>
    </React.Fragment>
  );
}

export default Logout;
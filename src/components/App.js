import React from 'react';
import Header from './Header';
import MemoryControl from './MemoryControl';

const containerStyle = {
  margin: "auto",
  width: "50vw",
  textAlign: "center"
};

function App() {
  return (
    <div style={containerStyle}>
      <Header />
      <MemoryControl />
    </div>
  );
}

export default App;

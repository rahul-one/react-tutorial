import React from 'react';
import './App.css';
import './components/ComponentA';
import ComponentA from './components/ComponentA';
import TableA from './components/TableA';


function App() {
  return (
    <div className="App">
      <ComponentA />
      <ComponentA />
      <TableA />
    </div>
  );
}

export default App;

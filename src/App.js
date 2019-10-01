import React from 'react';

import './App.css';
import Resource from './components/resource'

function App() {
  return (
    <div className="App">
      <Resource name='wood' />
      <Resource name='iron' />
    </div>
  );
}

export default App;

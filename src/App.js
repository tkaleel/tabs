import './App.css';
import React, { useState } from 'react';
import Tabs from './components/Tabs';

function App() {
  const tabList = ["Some text for tab 1", "some text for tab 2"]
  return (
    <div className="App">
      <Tabs tabList={tabList}/>

    </div>
  );
}

export default App;

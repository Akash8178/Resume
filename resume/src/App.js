import logo from './logo.svg';
import './App.css';
import resumeData from "./resume/data";
import Resume from './resume';

import React from 'react';
import Border from './resume/Border';
import MyComponent from './resume/MyComponent';
function App() {
  return (
    <div className="App">

      <h2>Assignment 1 </h2>

      <Resume resumeData={resumeData} />
      <hr />

      <h2>Assignment 2 </h2>
      <Border>
        <MyComponent />
      </Border>

    </div>
  );
}

export default App;

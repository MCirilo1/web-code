import React from 'react';
import './App.css';
import Profile from './Components/mypage/Profile';
import { Button } from "reactstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile />
        <Button
        color="success"
        >Test          
        </Button>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Profile from './Components/mypage/Profile';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import { Button } from "reactstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Profile />
        <Button
        color="success"
        >Test          
        </Button>
      </header>
      <Footer />
    </div>
  );
}

export default App;

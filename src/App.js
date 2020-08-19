import React from 'react';
import './App.css';
import Profile from './Components/mypage/Profile';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';

function App() {
  return (
    <div className="App">
        <Header />
      <header className="App-header">
        <Profile />
      </header>
      <Footer />
    </div>
  );
}

export default App;

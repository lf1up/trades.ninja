import React from 'react';
import Header from './Header'; // Correct for default export
import Footer from './Footer';
import MainContent from './MainContent';
import './App.css';

const App = () => (
  <div className="app">
    <Header />
    <MainContent />
    <Footer />
  </div>
);

export default App;

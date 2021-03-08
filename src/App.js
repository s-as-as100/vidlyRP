 
import React from 'react';
import './App.css';
import Counters from './components/counters';
import Navbar from './components/navbar';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <main class="container">
        <Counters/>
        </main>
    </React.Fragment>
     
  );
}

export default App;

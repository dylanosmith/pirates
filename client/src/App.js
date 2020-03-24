import React from 'react';
import './App.css';
import { Router } from '@reach/router'
import PirateDashboard from './views/PirateDashboard';
import AddPirate from './views/AddPirate';
import PirateDetails from './views/PirateDetails';
import EditPirate from './views/EditPirate';

function App() {
  return (
    <div className="App">
      <Router>
        <PirateDashboard path="/" />
        <AddPirate path = "/pirate/new" />
        <PirateDetails path ="/pirate/:id"/>
        <EditPirate path= "/pirate/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;

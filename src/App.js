
import './App.css';
import React from 'react'
import TicketSummary from './components'


function App() {
  return (
      <div className="container mt-5">
          <h1 className="text-primary mb-3">
              Mobile Ticket Viewer
          </h1>
         <TicketSummary />
     
    </div>
   
  );
}

export default App;

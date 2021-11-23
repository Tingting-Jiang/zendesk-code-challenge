
import './App.css';
import React from 'react'
import TicketSummary from './components'


function App() {
  return (
      <div className="container mt-5">
          <h1 className="text-primary justify-content-center">
              Mobile Ticket Viewer
          </h1>
         <TicketSummary />
     
    </div>
   
  );
}

export default App;

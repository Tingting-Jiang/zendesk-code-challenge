
import './App.css';
import { fetchTickets,fetchSomeTickets } from './tickets/fetchTickets'
import oldTickets from "./service/tickets.json"
import React, { useEffect, useState } from 'react'
import Tickets from './tickets/Tickets'
import Pagination from './tickets/Pagination'
import TicketList from './tickets'
import TicketItem from './tickets/TicketItem'
import TicketSummary from './tickets'


function App() {
  
  return (
      <div className="container mt-5">
      
      <h1 className="text-primary mb-3">
          Mobile Ticket Viewer
      </h1>
        {/*<Tickets tickets={currentTickets} loading={loading} />*/}
        {/*<Pagination ticketsPerPage={ticketsPerPage}*/}
        {/*            totalTickets={tickets.length}*/}
        {/*                paginate={paginate}/>*/}
        <TicketSummary />
     
    </div>
   
  );
}

export default App;

import React, { useState } from 'react'
import TicketDetails from './TicketDetails'
import TicketList from './TicketList'

const Tickets = ({tickets, isList, setList, loading}) => {
    let [ticket, setTicket]= useState();

    if (loading) {
        return <h2>Loading...</h2>;
    }
    
    // console.log(tickets);
    
  
    
    return (
   
        <div>
            {isList &&
                <TicketList tickets={tickets} setList={setList}
                            setTicket={setTicket}/> }
            
            {!isList &&
                <TicketDetails setList={setList}
                    ticket={ticket}/>}
        </div>
        
    );
    
    
    
    
    // return (
    //
    //     <ul className="list-group mb-4">
    //         {tickets.map(ticket => (
    //             <li key={ticket.id} className="list-group-item">
    //
    //
    //
    //                 {ticket.subject}
    //
    //             </li>
    //         ))}
    //     </ul>
    //
    // )
}
export default Tickets;
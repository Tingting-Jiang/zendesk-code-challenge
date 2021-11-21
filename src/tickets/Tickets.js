import React, { useEffect, useState } from 'react'
import { fetchTickets } from './fetchTickets'
import TicketDetails from './TicketDetails'
import TicketList from './TicketList'
import Pagination from './Pagination'

const Tickets = ({tickets, isList, setList}) => {
   

    // if (loading) {
    //     return <h2>Loading...</h2>;
    // }
    
    // console.log(tickets);
    
    
    // let [isList, setList] = useState(true);
    let [ticket, setTicket]= useState();
    
    return (
        <div>
            {isList &&
            <TicketList tickets={tickets} setList={setList} setTicket={setTicket}/> }
            
            {!isList &&
                <TicketDetails setList={setList}
                    ticket={ticket}/>}
        </div>
    )
    
    
    
    
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
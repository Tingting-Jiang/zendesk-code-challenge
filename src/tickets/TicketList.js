import React, { useEffect } from 'react'
import { fetchTickets } from './fetchTickets'

const TicketList = ({tickets, setList, setTicket}) => {
    
    // if (loading) {
    //     return <h2>Loading...</h2>;
    // }
    
    // console.log(tickets);
    
    
    const ViewTicket = (ticket) => {
        // console.log("event is", ticket);
        setTicket(ticket);
        setList(false);
        console.log("after setting: ", ticket);
        
    }

    return (
        
        <ul className="list-group mb-4">
            {tickets.map(ticketItem => (
                <li key={ticketItem.id}
                    className="list-group-item"
                onClick={() => ViewTicket(ticketItem)}>
                    {ticketItem.subject}
                    <span className="d-none">
                        {ticketItem.requester_id}
                    </span>
                
                </li>
            ))}
        </ul>
    
    )
}
export default TicketList;
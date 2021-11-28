import React from 'react'



const TicketList = ({tickets, setList, setTicket}) => {
    return (
        (tickets !== undefined) && (
        
        <ol className="list-group list-group-numbered mb-4">
            {tickets.map(ticketItem => (
              
                <li key={ticketItem.id}
                    
                    className=" card list-group-item list-group-item-action list-group-flush"
                    onClick={() => {
                        setTicket();
                        setList(false);
                        }
                    }
                    id="list-item">

                        {ticketItem.subject}
                        <span className="float-end">Status ➡ {ticketItem.status === null ? "Unknown" : ticketItem.status}</span>
                </li>
            ))}
        </ol>
        )
    
    )
}
export default TicketList;
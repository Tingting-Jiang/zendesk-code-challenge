import React from 'react'



const TicketList = ({tickets, setList, setTicket}) => {
    
    // if (loading) {
    //     return <h2>Loading...</h2>;
    // }
    
    // console.log(tickets);
    
    const ViewTicket = (ticket) => {
        // console.log("event is", ticket);
        setTicket(ticket);
        setList(false);
        // console.log("after setting: ", ticket);
        
    }

    return (
        (tickets !== undefined) && (
        
        <ol className="list-group list-group-numbered mb-4">
            {tickets.map(ticketItem => (
              
                <li key={ticketItem.id}
                    
                    className=" card list-group-item list-group-item-action list-group-flush"
                    onClick={() => ViewTicket(ticketItem)}
                    id="list-item">

                        {ticketItem.subject}
                        <span className="float-end">Priority ➡ {ticketItem.status === null ?
                    "Unknown" : ticketItem.status}</span>

                </li>
            ))}
        </ol>
        )
    
    )
}
export default TicketList;
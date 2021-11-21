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
        console.log("after setting: ", ticket);
        
    }

    return (
        (tickets !== undefined) && (
        
        <ol className="list-group list-group-numbered mb-4">
            {tickets.map(ticketItem => (
                <li key={ticketItem.id}
                    className="  list-group-item list-group-item-action"
                    onClick={() => ViewTicket(ticketItem)}>

                        {ticketItem.subject}  ➡ Priority :

                        {ticketItem.priority === null ?
                            "Unknown" : ticketItem.priority}
              
                    
                        <button className="btn btn-success float-end"
                                onClick={() => ViewTicket(ticketItem)}>
                            Details
                        </button>
                
                   
                   
                
                </li>
            ))}
        </ol>
        )
    
    )
}
export default TicketList;
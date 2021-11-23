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
    
                <li className="card list-group-item list-group-item-action my-2"
                    onClick={() => ViewTicket(ticketItem)}>
                    <div className="card-header fs-5">
                        {ticketItem.subject}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Priority : {ticketItem.priority === null ?
                            "Unknown" : ticketItem.priority}</h5>
                        <p className="card-text">
                            Status: {ticketItem.status === null ?
                            "Unknown" : ticketItem.status }
                            <button className="btn btn-success float-end">
                                    {/*// onClick={() => ViewTicket(ticketItem)}>*/}
                                Details
                            </button>
                        </p>
                    </div>
                </li>

                
                
                
                
                
                // <li key={ticketItem.id}
                //     className=" card list-group-item list-group-item-action list-group-flush"
                //     onClick={() => ViewTicket(ticketItem)}>
                //
                //         {ticketItem.subject}
                //         ➡ Priority: {ticketItem.priority === null ?
                //             "Unknown" : ticketItem.priority}
                //
                //
                //         <button className="btn btn-success float-end"
                //                 onClick={() => ViewTicket(ticketItem)}>
                //             Details
                //         </button>
                //
                // </li>
            ))}
        </ol>
        )
    
    )
}
export default TicketList;
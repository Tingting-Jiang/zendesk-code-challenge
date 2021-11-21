import React from "react";


// const TicketDetails = ({ticket = {
//     requester_id: 100,
//     subject: "in nostrud occaecat consectetur aliquip",
//     description: "Esse esse quis ut esse nisi tempor sunt. Proident",
//     priority: "low",
//     status: "open"
// }, setList}) => {


const TicketDetails = ({ticket, setList}) => {
    
    const {subject,
        description,
        priority,
        status,
        created_at,
        submitter_id,
        requester_id,
        assignee_id} = ticket;
   
    return (
        ticket && (
            <>
                <button
                    className="btn btn-primary my-5"
                    onClick={() => setList(true)}>
                    Back to Tickets  List
                </button>
                <h3>Subject: {subject === null ? "Unknown" : subject}</h3>
    
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col-2">#</th>
                        <th scope="col-3">Item</th>
                        <th scope="col-7">Details</th>
                       
                    </tr>
                    </thead>
                    
                    <tbody>


                    <tr>
                        <th scope="row">1</th>
                        <td>Description</td>
                        <td>{description === null ? "Unknown" : description}</td>
                    </tr>

                    <tr>
                        <th scope="row">2</th>
                        <td>Priority</td>
                        <td>{priority === null ? "Unknown" : priority}</td>
                    </tr>

                    <tr>
                        <th scope="row">3</th>
                        <td>Status</td>
                        <td>{status === null ? "Unknown" : status}</td>
                    </tr>
                    
                    <tr>
                        <th scope="row">4</th>
                        <td>Created At</td>
                        <td>{created_at === null ? "Unknown" : created_at}</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Submitter ID</td>
                        <td>{submitter_id === null ? "Unknown" : submitter_id}</td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td>Requester ID</td>
                        <td>{requester_id === null ? "Unknown" : requester_id}</td>
                    </tr>

                    <tr>
                        <th scope="row">7</th>
                        <td>Assignee ID</td>
                        <td>{assignee_id === null ? "Unknown" : assignee_id}</td>
                    </tr>
                    
                    
                    </tbody>
            
                </table>
                
            
                {/*// <p>Status: {ticket.status}</p>*/}
                {/*// <p >Description: {ticket.description}</p>*/}
                {/*// <p>Priority: {ticket.priority} </p>*/}
            </>
        )
        
    );


};
export default TicketDetails;
import React from "react";


const TicketDetails = ({ticket = {
    
    requester_id: 100,
    subject: "in nostrud occaecat consectetur aliquip",
    description: "Esse esse quis ut esse nisi tempor sunt. Proident",
    priority: "low",
    status: "open"
}, setList}) => {
    return (
        <>
            <button
                className="btn btn-primary my-5"
                onClick={() => setList(true)}>
                Back to Main Page
            </button>
            <h3>Subject: {ticket.subject}</h3>
            <p>Status: {ticket.status}</p>
            <p >Description: {ticket.description}</p>
            <p>Priority: {ticket.priority} </p>
        </>
    )


};
export default TicketDetails;
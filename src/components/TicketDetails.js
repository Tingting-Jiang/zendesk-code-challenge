import React from "react";


// const TicketDetails = ({ticket = {
//     requester_id: 100,
//     subject: "in nostrud occaecat consectetur aliquip",
//     description: "Esse esse quis ut esse nisi tempor sunt. Proident",
//     priority: "low",
//     status: "open"
// }, setList}) => {


const TicketDetails = ({ticket, setList}) => {
        let {
            subject,
            description,
            priority,
            status,
            created_at,
            submitter_id,
            requester_id,
            assignee_id
        } = (ticket === undefined || ticket === null) ? "Unknown" : ticket;
    
    const TranslateTime = (time) => {
        const date = new Date(time);
        if (date.toDateString() === "Invalid Date") return "";
        return date.toLocaleString("en-US");
    };
    
    created_at = TranslateTime(created_at);
   
   
    return (
        ticket && (
            <>
                <button
                    className="btn btn-primary my-5"
                    onClick={() => setList(true)}>
                    Back to Tickets  List
                </button>
                <h3>Subject: {subject === null ? "Unknown" : subject}</h3>
                
                <div className="card">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            Description: {description === null ? "Unknown" : description}
                        </li>
                        <li className="list-group-item">
                            Priority:
                            {priority === null ? "Unknown" : priority}
                        </li>
                        <li className="list-group-item">
                            Status: {status === null ? "Unknown" : status}
                        </li>
                        <li className="list-group-item">
                            Created At: {created_at === null ? "Unknown" : created_at}
                        </li>
    
                        <li className="list-group-item">
                            Submitter ID: {submitter_id === null ? "Unknown" : submitter_id}
                        </li>
    
                        <li className="list-group-item">
                            Requester ID: {requester_id === null ? "Unknown" : requester_id}
                        </li>
    
                        <li className="list-group-item">
                            Assignee ID: {assignee_id === null ? "Unknown" : assignee_id}
                        </li>
                    </ul>
                </div>
                
            </>
        )
        
    );


};
export default TicketDetails;
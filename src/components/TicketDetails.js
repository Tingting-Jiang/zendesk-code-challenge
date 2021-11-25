import React from "react";


// const TicketDetails = ({ticket = {
//     requester_id: 100,
//     subject: "in nostrud occaecat consectetur aliquip",
//     description: "Esse esse quis ut esse nisi tempor sunt. Proident",
//     priority: "low",
//     status: "open"
// }, setList}) => {


const TicketDetails = ({ticket, setList}) => {
    console.log(ticket);
   
   
   if (ticket !== null && ticket !== undefined ){
       let {
           subject,
           description,
           priority,
           status,
           created_at,
           submitter_id,
           requester_id,
           assignee_id
       } = ticket;
    
       const TranslateTime = (time) => {
           const date = new Date(time);
           if (date.toDateString() === "Invalid Date") return "";
           return date.toLocaleString("en-US");
       };
    
       created_at = TranslateTime(created_at);
    return (
        
            <>
                <button
                    className="btn btn-primary my-5"
                    onClick={() => setList(true)}
                    id="button">
                    Back to Tickets List
                </button>
                <h2 id="header">Subject: {subject === null ? "Unknown" : subject}</h2>
                
                <div className="card">
                    <ul className="list-group list-group-flush fs-6">
                        <li className="list-group-item py-3">
                            Description:
                            <p> {description === null ? "Unknown" : description}</p>
                        </li>
                        <li className="list-group-item py-3">
                            Priority:
                            {priority === null ? "Unknown" : priority}
                        </li>
                        <li className="list-group-item py-3">
                            Status: {status === null ? "Unknown" : status}
                        </li>
                        <li id="time" className="list-group-item py-3">
                            Created At: {created_at === null ? "Unknown" : created_at}
                        </li>
     
                        <li className="list-group-item py-3">
                            Submitter ID: {submitter_id === null ? "Unknown" : submitter_id}
                        </li>
    
                        <li className="list-group-item py-3">
                            Requester ID: {requester_id === null ? "Unknown" : requester_id}
                        </li>
    
                        <li className="list-group-item py-3">
                            Assignee ID: {assignee_id === null ? "Unknown" : assignee_id}
                        </li>
                    </ul>
                </div>
                
            </>
    )}
   
   else {
       return(
           <>
    
               <button
                   className="btn btn-primary my-5"
                   onClick={() => setList(true)}
                   id="button">
                   Back to Tickets List
               </button>
               <h3 className="my-5">Oops, the ticket is empty...</h3>
            </>
       )
    }


};
export default TicketDetails;
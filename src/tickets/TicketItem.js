import React from 'react';



const TicketItem = ({ ticket}) => {
    
   
    return (
        <li className="list-group-item text-start">
            {/*<Link to=`/${ticket.requester_id}`>*/}
           
            {ticket.subject}
     
        </li>
    );
};
export default TicketItem;

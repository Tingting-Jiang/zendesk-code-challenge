import TicketItem from "./TicketItem";
// import tickets from "../service/data.json"
import { useEffect, useState } from 'react'
import fetchTickets from './fetchTickets'


const TicketList = () => {
  
    // const length = tickets.length;
    const [tickets, setTickets] = useState([]);
    useEffect(() =>
            fetchTickets()
                .then(test => {
                    setTickets(test.tickets);
                })
    ,[]);

    console.log("new data______", tickets);
    const length = tickets.length;
    

    return (
        <>
            <h3>{length} total tickets, 25 on this page</h3>
            <ol className="list-group list-group-numbered">
                {tickets.map((ticket, key) => {
                    return <TicketItem ticket={ticket} key={key} />;
                })}
            </ol>
        </>
    );
};
export default TicketList;

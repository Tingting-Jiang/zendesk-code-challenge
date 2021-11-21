
import React, { useEffect, useState } from 'react'
import { fetchSomeTickets } from './fetchTickets'
import Pagination from './Pagination'
import Tickets from './Tickets'




const TicketSummary = () => {
    
    const [tickets, setTickets] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [ticketsPerPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [length, setLength]= useState(0);
    
    
    let [isList, setList] = useState(true);

    
    const paginate = pageNumber => setCurrentPage(pageNumber);

    useEffect(() => {
            console.log("Start fectchSomeTickets function");
            fetchSomeTickets(currentPage, ticketsPerPage)
                .then(data => {
                    console.log("sdfsdf");
                    console.log(data.tickets);
                    setTickets(data.tickets);
                    setLength(data.count);
                })}
        ,[currentPage]);
    
    
    console.log("after useEffect, tickets: ", tickets);

    console.log("---------------------");
    console.log("---------------------");
    console.log("---------------------");
    
    // const length = tickets.length;

    
    
  
    return (
        <>
            {isList && <h3>{length} total tickets, {tickets.length} on this page</h3>}
    
            <Tickets tickets={tickets} isList={isList} setList={setList}/>
            <hr/>
            {isList &&
            <Pagination ticketsPerPage={ticketsPerPage}
                        totalTickets={length}
                            paginate={paginate}/>}
                    
        </>
    )
}

export default TicketSummary;

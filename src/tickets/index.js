import React, { useEffect, useState } from 'react'
import { fetchSomeTickets } from './fetchTickets'
import Pagination from './Pagination'
import Tickets from './Tickets'
const ticketsPerPage = 2;

const TicketSummary = () => {
    
    const [tickets, setTickets] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [length, setLength]= useState(0);
    let [isList, setList] = useState(true);
    const [error, setError] = useState(null);
   
    const paginate = pageNumber => setCurrentPage(pageNumber);

    useEffect(() => {
            console.log("Start fectchSomeTickets function");
            fetchSomeTickets(currentPage, ticketsPerPage)
                .then(data => {
                    setTickets(data.tickets);
                    setLength(data.count);
                    setLoading(false);
                }).catch(e => {
                    console.log("--------Error-------");
                    if (e.status) {
                        setError(e.status + " " + e.statusText);
                    } else {
                        setError(e.message);
                    }
                setLoading(false);
            })
        }
        ,[currentPage]);
    
    
    console.log("after useEffect, tickets: ", tickets);
    console.log("---------------------");
    
    
    if (error !== null) {
        return (
            <div>
                <h3>There is something wrong 😭😭</h3>
                <p> Error Message: {error} </p>
            </div>
        )
    }
    
    else {
        return (
            <>
                {/*{loading && (*/}
                {/*    <div className="text-secondary">*/}
                {/*        <p>{"Loading Tickets..."}</p>*/}
                {/*    </div>*/}
                {/*)}*/}
            
                {isList && <h3 className="my-5">
                    {length} total tickets, {tickets.length} on this page
                </h3>}
            
                <Tickets tickets={tickets}
                         isList={isList}
                         setList={setList}
                         error={error}
                         loading={loading}/>
                <hr/>
                {isList &&
                <Pagination ticketsPerPage={ticketsPerPage}
                            totalTickets={length}
                            paginate={paginate}/>}
        
        
            </>
        )
    }
    
}

export default TicketSummary;

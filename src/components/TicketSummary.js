import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'
import Tickets from './Tickets'
const ticketsPerPage = 25;
const URL = "http://localhost:4000";

const TicketSummary = () => {
    
    const [tickets, setTickets] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [length, setLength]= useState(0);
    let [isList, setList] = useState(true);
    const [error, setError] = useState(null);
   
    const paginate = pageNumber => setCurrentPage(pageNumber);

    useEffect(() => {
            fetch(`${URL}/${currentPage}/${ticketsPerPage}`)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw response;
                    }})
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
    
    
    // console.log("after useEffect, tickets: ", tickets);
    // console.log("---------------------");
    
    
    if (error !== null) {
        return (
            <div>
                <h3>Oops, something wrong 😭😭</h3>
                <p id="error"> Error Message: {error} </p>
            </div>
        )
    }
    
    else {
        return (
            <>
            
                {isList && <h3 className="my-5">
                    {length} total tickets, {tickets.length} on this page
                </h3>}
            
                <Tickets tickets={tickets}
                         isList={isList}
                         setList={setList}
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

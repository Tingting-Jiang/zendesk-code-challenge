import React, { useState } from 'react'


const Pagination = ({ticketsPerPage, totalTickets, paginate}) =>{
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalTickets / ticketsPerPage ); i++) {
        pageNumbers.push(i);
    };
    
    const [active, setActive] = useState(1);
  
    return (

            <ul className="pagination nav nav-pills align-items-center ">
                {pageNumbers.map(number => (
                    <li key={number}
                        className={`page-item
                    ${active === number ? "active" : ""}`}   >
                        <a onClick={() => {
                            paginate(number);
                            setActive(number);
                            
                        }}
                            href="!#"
                           className="page-link"
                           id="change-page"
                      >
                            {number}
                        </a>
                    </li>
                ))}
            </ul>

    )
};
export default Pagination;



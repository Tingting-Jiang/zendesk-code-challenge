import React, { useState } from 'react'


const Pagination = ({ticketsPerPage, totalTickets, paginate}) =>{
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalTickets / ticketsPerPage ); i++) {
        pageNumbers.push(i);
    };
    
    const [active, setActive] = useState(1);
  
    return (
        <nav className="nav-pills">
            <ul className="pagination">
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
                      >
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
};
export default Pagination;



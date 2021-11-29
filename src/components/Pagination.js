import React from 'react'


const Pagination = ({ticketsPerPage, totalTickets, paginate, active}) =>{
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalTickets / ticketsPerPage ); i++) {
        pageNumbers.push(i);
    };
  
    return (

            <ul className="pagination nav nav-pills justify-content-center">
                {pageNumbers.map(number => (
                    <li key={number}
                        className={`page-item
                    ${active === number ? "active" : ""}`}   >
                        <a onClick={() => {
                            paginate(number);
                        }}
                           href="/#"
                           className="page-link"
                           id="change-page"
                           data-testid="change-page2"
                      >
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
    )
};
export default Pagination;



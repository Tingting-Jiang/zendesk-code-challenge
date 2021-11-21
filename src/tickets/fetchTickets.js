// import URL from "../data/data";
// import TicketsPerPage from "../data/data";


const URL = "http://localhost:4000";
// const TicketsPerPage = 2;

export const fetchSomeTickets = (TicketsPerPage, page) =>
    
    fetch(`${URL}/${TicketsPerPage}/${page}`)
        .then(console.log("backend localhost: ", `${URL}/${TicketsPerPage}/${page}`))
        .then(response => response.json());

       
//
// export const fetchTickets = () =>
//     fetch(URL)
//         .then(response => response.json());



// export default {fetchTickets};
    

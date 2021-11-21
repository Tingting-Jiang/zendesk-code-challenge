// import URL from "../data/data";
// import TicketsPerPage from "../data/data";


const URL = "http://localhost:4000/";

// const TicketsPerPage = 25;

// const fetchTickets = (page) =>
//     fetch(`${URL}/tickets/${TicketsPerPage}/${page}`)
//         .then(response => response.json());

const fetchTickets = () =>
    fetch(URL)
        .then(response => response.json());

export default fetchTickets;
    

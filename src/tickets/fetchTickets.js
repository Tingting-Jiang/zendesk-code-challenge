

const URL = "http://localhost:4000";

export const fetchSomeTickets = (TicketsPerPage, page) =>
    fetch(`${URL}/${TicketsPerPage}/${page}`)
        .then(console.log("backend localhost: ", `${URL}/${TicketsPerPage}/${page}`))
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw response;
            }});
            
        


    

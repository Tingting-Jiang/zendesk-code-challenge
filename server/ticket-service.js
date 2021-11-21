const fetch = require("node-fetch");

const URL = "https://zccthanksgiving.zendesk.com";

const base =require('base-64');
const USER = "jtting@126.com";
const PASS = "Jtt88384191.";
const AUTH = "Basic " + base.encode(USER + ":" + PASS);
// const AUTH = require("./data");
console.log("in ticket-server1");

module.exports = (app) =>  {
    console.log("in ticket-server2");
    const fetchTickets = (req, res) => {
        console.log("in ticket-server3");
    
       const tickets = "/api/v2/tickets.json";

        fetch(URL + tickets, {
            method: "GET",
            headers: {
                Authorization: AUTH
            }
        })
            .then(response => {
                if (response.ok) {
                    // console.log(response);
                    return response.json();
                } else {
                    console.log(URL)
                    console.log(response);
                    console.log('!!!---Error---!!!')
                    throw response;
                }
            })
            .then(ticket => {
                console.log('send data out');
                console.log(ticket);
                res.send(ticket);
                console.log('done send data out');
    
            })
            .catch(e => {
                // console.log('!!!---Error---!!!');
                // console.log(`Failed to get tickets for page ${req.params.pageNum}.`);
                // console.log(`[status: ${e.response.status}] [${e.response.statusText}] [${e.response.data.error}]`)
                res.status(e.status);
                res.send(e);
            });

    }
    
    
    const fetchAllTickets = (req, res) => {
        console.log("in all ticket-server0");
        
        const tickets = `/api/v2/tickets.json?sort_by=created_at&sort_order=desc&page=${
            req.params.thisPage
        }&per_page=${req.params.pageNum}`;

        fetch(URL + tickets, {
            method: "GET",
            headers: {
                Authorization: AUTH
            }
        })
            .then(response => {
                if (response.ok) {
                    // console.log(response);
                    return response.json();
                } else {
                    console.log(URL)
                    console.log(response);
                    console.log('!!!---Error---!!!')
                    throw response;
                }
            })
            .then(ticket => {
                console.log('send data out');
                console.log(ticket);
                res.send(ticket);
                console.log('done send data out');
                
            })
            .catch(e => {
                // console.log('!!!---Error---!!!');
                // console.log(`Failed to get tickets for page ${req.params.pageNum}.`);
                // console.log(`[status: ${e.response.status}] [${e.response.statusText}] [${e.response.data.error}]`)
                res.status(e.status);
                res.send(e);
            });
        
    }
    
    
    
    console.log("in ticket-server4");
    app.get("/", fetchTickets);
   
    console.log("in ticket-server5");
    // app.get("/tickets/:thisPage/:pageNum", fetchAllTickets);
}
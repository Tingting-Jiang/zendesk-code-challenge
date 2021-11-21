const fetch = require("node-fetch");

const URL = "https://zccthanksgiving.zendesk.com";

const base =require('base-64');
const USER = "jtting@126.com";
const PASS = "Jtt88384191.";
const AUTH = "Basic " + base.encode(USER + ":" + PASS);
// const AUTH = require("./data");


module.exports = (app) =>  {
    
    const fetchAllTickets = (req, res) => {
        const tickets = `/api/v2/tickets.json?sort_by=created_at&sort_order=desc&page=${
            req.params.thisPage
        }&per_page=${req.params.pageNum}`;
        console.log("api link: ", tickets);

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
                    console.log('!!!---Error---!!!')
                    throw response;
                }
            })
            .then(ticket => {
           
                res.send(ticket);
             
                
            })
            .catch(e => {
                // console.log('!!!---Error---!!!');
                // console.log(`Failed to get tickets for page ${req.params.pageNum}.`);
                // console.log(`[status: ${e.response.status}] [${e.response.statusText}] [${e.response.data.error}]`)
                res.status(e.status);
                res.send(e);
            });
        
    }
    // app.get("/", fetchTickets);
    
    app.get("/:thisPage/:pageNum", fetchAllTickets);
}

const fetch = require("node-fetch");

const URL = "https://zccthanksgiving.zendesk.com";

const base =require('base-64');
const USER = "jtting@126.com";
const PASS = "Jtt88384191.";
const AUTH = "Basic " + base.encode(USER + ":" + PASS);
// const AUTH = require("./data");


module.exports = (app) =>  {

    const fetchTickets = (req, res) => {

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
                    console.log('!!!---Error---!!!')
                    throw response;
                }
            })
            .then(ticket => {
                res.send(ticket);
                // res.send(res.paginatedResults)
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
                // console.log(ticket)
                res.send(ticket);
                // console.log(tickets);
                // console.log('done send data out');
                
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


// const paginatedResults =(model) => {
//
//     return (req, res, next) => {
//         const page = parseInt(req.query.page);
//         const limit = parseInt(req.query.limit);
//         const startIndex = (page - 1) * limit;
//         const endIndex = page * limit;
//
//         const results = {};
//         if (endIndex < model.length) {
//             results.next = {
//                 page: page + 1,
//                 limit: limit
//             }
//         }
//
//         if (startIndex > 0) {
//             results.previous = {
//                 page: page - 1,
//                 limit: limit
//             }
//         }
//         results.results = model.slice(startIndex, endIndex);
//
//         res.paginatedResults = results;
//         next();
//
//     }
// }
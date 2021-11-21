const express = require('express');
const app = express();


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

console.log("in server");
require('./ticket-service')(app);

app.listen(4000);



// const server = app.listen(5556, () => {
//     // Enable CORS for client only
//     app.use((req, res, next) => {
//         res.header("Access-Control-Allow-Origin", "http://localhost:5555");
//         res.header(
//             "Access-Control-Allow-Headers",
//             "Origin, X-Requested-With, Content-Type, Accept"
//         );
//         next();
//     });
//
//     const port = server.address().port;
//     console.log("Server app listening on port", port);
//
//     // Handle page of tickets request
//     app.get("/tickets/:per_page/:page", (req, res) => {
//         const tickets = `/api/v2/tickets.json?sort_by=created_at&sort_order=desc&page=${
//             req.params.page
//         }&per_page=${req.params.per_page}`;
//         fetch(url + tickets, {
//             method: "GET",
//             headers: {
//                 Authorization: auth
//             }
//         })
//             .then(response => {
//                 if (response.ok) {
//                     return response.json();
//                 } else {
//                     throw response;
//                 }
//             })
//             .then(json => {
//                 res.send(json);
//             })
//             .catch(e => {
//                 console.log(`Failed to get tickets for page ${req.params.page}.`);
//                 res.status(e.status);
//                 res.send(e);
//             });
//     });
// });


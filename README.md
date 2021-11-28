# **Zendesk Coding Challenge**

A mobile tickets viewer web application of Zendesk's accounts.

#### Preview:

![img_1.png](img_1.png)

___

## **Steps**

### **Install**

Clone the project to a local directory named "zendesk-coding":
    
    git clone https://github.com/Tingting-Jiang/zendesk-coding-challenge.git
   
Get into the directory:

    cd zendesk-coding

Install node_modules dependencies:

    npm install

___

### **Build**

**Prerequisite:** 

Open two terminal windows: both get into the local directory "zendesk-coding"

Set up server (terminal No.1):

    cd server
    npm run devStart

Run front end (terminal No.2)

    npm start

Run test (first exit (Ctrl + C/D ) from both terminals, 
use terminal No.2 to run the following)

    npm test

---

### **Test Coverage Result**
-------------------|---------|----------|---------|---------|-------------------
File               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-------------------|---------|----------|---------|---------|-------------------
All files          |     100 |      100 |     100 |     100 |                   
 src               |     100 |      100 |     100 |     100 |                   
  App.js           |     100 |      100 |     100 |     100 |                   
 src/components    |     100 |      100 |     100 |     100 |                   
  Pagination.js    |     100 |      100 |     100 |     100 |                   
  TicketDetails.js |     100 |      100 |     100 |     100 |                   
  TicketList.js    |     100 |      100 |     100 |     100 |                   
  TicketSummary.js |     100 |      100 |     100 |     100 |                   
  Tickets.js       |     100 |      100 |     100 |     100 |                   
 src/data          |     100 |      100 |     100 |     100 |                   
  data.js          |     100 |      100 |     100 |     100 |                   
-------------------|---------|----------|---------|---------|-------------------
Test Suites: 6 passed, 6 total
Tests:       24 passed, 24 total
Snapshots:   10 passed, 10 total
Time:        2.109 s

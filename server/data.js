const base =require('base-64');
const USER = "jtting@126.com";
const PASS = "Jtt88384191.";
const AUTH = "Basic " + base.encode(USER + ":" + PASS);


module.exports= {AUTH};






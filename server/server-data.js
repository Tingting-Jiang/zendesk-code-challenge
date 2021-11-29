const base = require('base-64');
const USER = "jtting@126.com";
const PASS = "Jtting@126.com";
let AUTH = "Basic " + base.encode(USER + ":" + PASS);
module.exports = AUTH;
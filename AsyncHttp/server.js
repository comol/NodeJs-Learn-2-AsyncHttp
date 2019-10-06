"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
const dotenv = require("dotenv");
const http = require("http");
const timers_1 = require("timers");
var port = process.env.port || 1337;
function currenttime() {
    let now = moment.utc();
    moment.lang('ru');
    return now.format('DD.MM.YYYY, h:mm:ss');
}
function starttimer() {
    console.log(currenttime());
}
function stoptimer(timer) {
    console.log('timer stopped');
    timers_1.clearInterval(timer);
}
let conf = dotenv.config();
let timerinterval = Number(process.env.Timer);
let processinterval = Number(process.env.Process);
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    let thistimer = setInterval(starttimer, timerinterval);
    timers_1.setTimeout(stoptimer, processinterval, thistimer);
    res.end('Timer started ' + currenttime());
}).listen(port);
//# sourceMappingURL=server.js.map
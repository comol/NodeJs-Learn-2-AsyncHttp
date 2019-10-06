import * as moment from 'moment';
import * as dotenv from 'dotenv';
import http = require( 'http' );
import { setTimeout, clearInterval } from 'timers';
var port = process.env.port || 1337



function currenttime(): string
{
	let now = moment.utc();
	moment.lang( 'ru' );
	return now.format( 'DD.MM.YYYY, h:mm:ss' );
}

function starttimer()
{
	console.log( currenttime() );
}

function stoptimer( timer: NodeJS.Timeout )
{
	console.log( 'timer stopped' );
	clearInterval( timer );
}

dotenv.config();
let timerinterval: number = Number( process.env.Timer );
let processinterval: number = Number( process.env.Process );

http.createServer(function (req, res) {

	res.writeHead( 200, { 'Content-Type': 'text/plain' } );
	let thistimer = setInterval( starttimer, timerinterval );
	setTimeout( stoptimer, processinterval, thistimer );
	res.end( 'Timer started ' + currenttime() );

}).listen(port);
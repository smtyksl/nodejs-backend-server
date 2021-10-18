var express = require('express');
var app = express();
const helmet = require('helmet')
const morgan = require("morgan")
var bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotenv = require('dotenv');

const result = dotenv.config({ path: __dirname + '/.env' })

if (result.error) {
    throw result.error
}

app.use(helmet())
app.use(morgan("dev"))
app.use(cookieParser());
// app.use(cors({
//     origin: [
//         'http://localhost:8000',
//         `http://${process.env.IPADD}:8000`,
//     ],
//     credentials: true
// }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//var http = require('http').createServer(app);



console.log(new Date())
require('./router.js')(app);


console.log("%s\x1b[32m%s\x1b[0m%s\x1b[32m%s", 'Server started in ', process.env.NODE_ENV, ' mode on port ', process.env.PORT)
console.log("%s\x1b[32m%s", 'Endpoint URL: ', process.env.URL)

//http.listen(process.env.PORT, process.env.IPADD);

app.listen("8080")
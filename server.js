let express = require("express");
const helmet = require('helmet')
const morgan = require("morgan")
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

let app = express();

app.use(helmet())
app.use(morgan("dev"))
app.use(cookieParser());

app.use(bodyParser.json())
app.use(cors({
    origin: [
        'http://localhost:3000',
    ],
    credentials: true
}));

let http = require('http').createServer(app);

require("./router.js")

console.log("%s\x1b[32m%s\x1b[0m%s\x1b[32m%s", 'Server started in ', "localhost", ' mode on port ', "8080")
console.log("%s\x1b[32m%s", 'Endpoint URL: ', "localhost")

http.listen("8080", "localhost");
'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const app = require('express')();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const serverConfiguration = require('./configurations/server_config')[process.env.NODE_ENV].server;
const router = require('./router');

app.use(morgan('combined'));
app.use(cors()); //you can pass as a parameter to cors only accept requests from a specific domain(s) - read docs on cors middleware module
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(helmet());
app.use(helmet.hidePoweredBy());

router(app);

app.listen(process.env.PORT || serverConfiguration.port, () => {
	console.log(`App listening on port ${ process.env.PORT || serverConfiguration.port } Press Ctrl+C to quit`);
});


const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const config = require('./config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const loggerFormat = '[:date[web]] ":method :url" :status :response-time';
app.use(morgan(loggerFormat));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/hello', (req, res) => {
  res.json({ text: 'Hello there' });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/client/build/index.html`));
});

app.listen(config.port, () => console.info(`Server is running on port: ${config.port}`));

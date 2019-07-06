const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const config = require('./config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const loggerFormat = '[:date[web]] ":method :url" :status :response-time';
app.use(morgan(loggerFormat));

app.get('/', (req, res) => {
  res.json({ text: 'Hello there' });
});

app.listen(config.port, () => console.info(`Server is running on port: ${config.port}`));

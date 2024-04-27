const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const router = require('./routes');
require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/api', router);

app.use(express.static(path.join(__dirname, '../temp')));

const PORT = process.env.PORT;
app.listen(PORT);
console.log(`Server is listening at PORT ${PORT}`);
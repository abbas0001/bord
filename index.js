const createUser = require('./routes/createUser');
const setAPI = require('./routes/set');

const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();
const mongoString = process.env.DATABASE_URL;
mongoose.set('strictQuery', true);
mongoose.connect(mongoString, {
    authSource: "admin"
});
const database = mongoose.connection;
database.on('error', (error) => {
    console.log(error);
});
database.once('connected', () => {
    console.log('Database Connected');
});

const app = express();
app.use(express.raw({type: 'application/json'}));
app.use('', createUser);
app.use('', setAPI);

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`);
});
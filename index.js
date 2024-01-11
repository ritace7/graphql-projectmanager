//setup
require('dotenv').config();

//imports
const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const colors = require('colors');
const schema = require('./schema/schema');
const connectDB = require('./config/db');
const cors = require('cors');

const port = process.env.PORT || 5000;
const app = express();

//connect to db
connectDB();

//middleware
app.use(cors());
app.use(express.static('build'));

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development"
}))

app.listen(port, console.log(`listening on port ${port}`))
const express = require("express");
const GraphHTTP = require('express-graphql');

// Config
const APP_PORT = 3000;
const schemas = require('./schema');

// Start
const app = express();

// GraphQL
app.use('/graphql',GraphHTTP({
    schema: schemas,
    pretty: true,
    graphiql: true,
    port: 8889,
}));

app.listen(APP_PORT, ()=> {
    console.log(`App listening on port ${APP_PORT}`);
});
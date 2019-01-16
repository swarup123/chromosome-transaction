const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

mongoose.connect(dbConfig.url)
.then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

app.get('/', (req, res) => {
    res.json({"message": "Welcome "});
});

require('./routes/routes.js')(app);
app.listen(3030, () => {
    console.log("Server is listening on port 3030");
});
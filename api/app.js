var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var CrudRouter = require('./src/routes/CrudRouter');
var path = require('path');

const PORT = process.env.PORT || 5000;
var app = express();

app.use(express.static(path.join(__dirname, "..", "build")));

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb+srv://Testing123:iVYG7pRG1KJYyG1r@cluster0.eay84.mongodb.net/<dbname>?retryWrites=true&w=majority',{ useNewUrlParser: true,useUnifiedTopology: true })
    .then(() => {
        console.log('Server is started.....');
    })
    .catch((err) => {
        console.error('App starting error:', err.stack);
        process.exit(1);
    });

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// routes
app.use('/items', CrudRouter);

// Start the server
app.listen(PORT ,function() {
    console.log('Server is running on Port: ', PORT);
});

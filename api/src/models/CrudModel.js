var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var CountryInfo = new Schema({
    orderID: {
        type: String,
        default: mongoose.Types.ObjectId(),
    },
    product: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    },
    countryName: {
        type: String
    }

},{
    collection: 'CountryInfo'
});

module.exports = mongoose.model('CountryInfo', CountryInfo);

var express = require('express');
var app = express();
var Router = express.Router();
var crudController = require('../controller/CrudController');

Router.route('/').get(crudController.getCountryDetails)

Router.route('/add/post').post(crudController.createCountry);

Router.route('/edit/:id').get(crudController.editDetails);

Router.route('/getDetails/:countryName').get(crudController.getDetailsByCountry);

Router.route('/update/:id').post(crudController.updateDetails);

Router.route('/delete/:id').get(crudController.deleteDetails);

module.exports = Router;

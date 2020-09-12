const Item = require('../models/CrudModel');

const createCountry = async (req, res) => {
    var item = new Item(req.body);
    await item.save()
    .then((item) => {
        res.json({msg:'Item added successfully'});
    })
    .catch((err) => {
        res.status(400).send({msg:"unable to save to database"});
    });
}

const getCountryDetails = async (req,res) => {
    Item.find(function(err, item) {
        if(err) {
            console.log(err);
        }
        else {
            res.json(item);
        }
    });
}

const getDetailsByCountry = async (req,res) => {
    const countryName = req.params.countryName;
    Item.find({countryName: countryName},function(err, item) {
        if(err) {
            console.log(err);
        }
        else {
            res.json(item);
        }
    });
}

const editDetails = async (req,res) => {
    var id = req.params.id;
    Item.findById(id, function(err, item) {
        res.json(item);
    });
}

const updateDetails = async (req,res) => {
    Item.findById(req.params.id, function(err, item) {
        if(!item) {
            return next(new Error({msg: 'could not load Document'}));
        }
        else {
            item.countryName = req.body.countryName;
            item.product = req.body.product;
            item.save().then(item => {
                res.json({msg: 'Update completed'});
            })
            .catch((err) => {
                res.status(400).send({msg: "unable to update the database"});
            });
        }
    });
}

const deleteDetails = async (req,res) => {
    Item.findByIdAndRemove({_id: req.params.id }, function(err, item) {
        if(err) {
            res.json(err);
        }
        else {
            res.json({msg: 'Successfully removed'});
        }
    });
}

module.exports = {
  createCountry,
  getCountryDetails,
  editDetails,
  updateDetails,
  deleteDetails,
  getDetailsByCountry,
}
// Require all models
const db = require('../models/applist');

// 'app' contains the Express application
module.exports = function (app) {

     // Route for retrieving all gDocs
     app.get('/api/applist', function (req, res) {
        db.find({})
            .then(function (db) {
                res.json(db);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    // Route for saving a gDoc
    app.post('/add', function (req, res) {
        db.create(req.body)
            .then(function (db) {
                res.json(db);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    // Route for opening an existing gDoc
    app.get('/get/:docId', function (req, res) {
        db.findOne({_id: req.params.docId})
            .then(function (db) {
                res.json(db);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    // Route for deleting a gDoc
    app.delete('/delete/:id', function (req, res) {
        db.deleteOne({ _id: req.params.id })
            .then(function (db) {
                res.json(db);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    // Route for updating a gDoc - (Not in use)
    app.put(`/api/update/:id`, function (req, res) {
        db.findById({ _id: req.params.id })
            .then(function (db) {
                res.json(db);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

};



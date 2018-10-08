// Require all models
const db = require('../models/applist');

// 'app' contains the Express application
module.exports = function (app) {

     // Route for retrieving documents via a GET request
     app.get('/api/applist', function (req, res) {
        db.find({})
            .then(function (db) {
                res.json(db);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    // Route for saving a document via POST request
    app.post('/add', function (req, res) {
        db.create(req.body)
            .then(function (db) {
                res.json(db);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    // Route for deleting a document via DELETE request
    app.delete('/delete/:id', function (req, res) {
        db.deleteOne({ _id: req.params.id })
            .then(function (db) {
                res.json(db);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    // Route for updating a document via PUT request
    app.put(`/api/update/:id`, function (req, res) {
        // Find to do entry by ID
        db.findOneAndUpdate({ _id: req.params.id }, { $set: { completed: true } })
            .then(function (db) {
                res.json(db);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

};

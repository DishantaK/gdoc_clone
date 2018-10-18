//Require path for index.html
const path = require('path');


/**
 * La middleware.
 * @module exports  HTML routes
 */
module.exports = function (app) {
    
       /**
     * Get Home and Doc Pages.
     * @async get - gets page // sends html.
     */

    app.get('/doc/:id', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/doc.html'));
    });

    app.get('/theNewDoc/', function (req, res){
        res.sendFile(path.join(__dirname, '../public/newdoc.html'));
    });

     //Default to index.html
     app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

}; 
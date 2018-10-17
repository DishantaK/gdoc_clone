//Require path for index.html
const path = require('path');

//Pass in 'app' for Express
module.exports = function (app) {
   
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
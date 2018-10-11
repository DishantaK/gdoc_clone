const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const PORT = process.env.PORT || 3000;

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));


// mongoose.connect('', { useNewUrlParser: true });


require('./routes/routes')(app);

// Start the server
app.listen(PORT, function() {
  console.log(`App running on port ${PORT}`);
});

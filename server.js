express = require('express');
path = require('path');

app = express();
PORT = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));





require('./routes/html')(app);

app.listen(PORT, function(){
  console.log(`App is now listening on PORT ${PORT}`)
})
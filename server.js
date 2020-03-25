const express = require('express');
const mongoose = require('mongoose');

const newsRoute = require('./routes/admin');
const fansRoute = require('./routes/fans');

const app = express();


app.use('/api/fans', fansRoute);
app.use('/api/news', newsRoute);

app.use(express.static(__dirname + '/public'));

mongoose
.connect('mongodb://localhost:27017/WebTaskDb',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }
 )
.then(() => {
    console.log('connection to database established');
  })
  .catch((err) => {
    console.log(`db error ${err.message}`);
  });
app.listen(3012, ()=>{
    console.log("Server running");
})
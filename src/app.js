const routes = require('./routes');
const errorHandler = require('./error');
const express = require('express');
const bodyParser = require('body-parser')
const OpenApiValidator = require('express-openapi-validator');
const path = require('path')
const app = express();
const port = process.env.PORT || 3000;
const apiSpec = path.join(__dirname, '../openapi.yaml');

app.set('port', port);

//app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
    OpenApiValidator.middleware({
      apiSpec,
      validateRequests: true, // (default)
      validateResponses: true, // false by default
    }),
  );
//app.use('/', routes);

app.post('/pets', (req, res, next) => {
    //console.log("======request====",req)
    res.status(201).json({
      status: 'success',
      data: req.body
    });
  
  })


if (process.env.NODE_ENV !== 'test') {
    
app.listen(port, () => { console.log(`App running on port ${port}`) });
}

module.exports =   app 
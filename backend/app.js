var express = require('express');
var cors = require('cors')
var app = express();

app.use(function(req, res, next) {
   // Website you wish to allow to connect
   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');

   // Request methods you wish to allow
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

   // Request headers you wish to allow
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

   // Set to true if you need the website to include cookies in the requests sent
   // to the API (e.g. in case you use sessions)
   res.setHeader('Access-Control-Allow-Credentials', true);

   // Pass to next layer of middleware
   next();
 });

app.get('/', function(req, res){
   res.json({ user: 'tobi' });
});


app.get('/projects', function(req, res){
   res.json(
      {
         "projects" : [

            {
               "id" : 1,
               "name" : "Less Than Charming",
               "description" : "really funny",
               "progress" : {
                  "word count" : 100,
                  "word goal" : 10000
               },
               "author" : "Clark Ngo"
            },
            {
               "id" : 2,
               "name" : "More Than Charming",
               "description" : "really sad",
               "progress" : {
                  "word count" : 200,
                  "word goal" : 1000
               },
               "author" : "Tori Murray"
            }
         ]
      }
   );
});

app.listen(3000);

const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

//add the router
app.use(express.static(__dirname + '/views'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/public'));
//Store all JS and CSS in Scripts folder.

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});



app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
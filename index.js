const express = require("express");
const app = express();
const bodyParser= require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000, () => {
    console.log(`Event app listening at http://localhost:3000`);
  });
 app.set('view engine', 'ejs');
app.set('views','./views')
app.use(express.static('public'))
 app.get("/" ,function(req,res)
 {
     res.send("Yatndeep Ye first page hai")
 })
 app.get("/course",function(req,res)
 {
    res.send("Ye Course ka page hai")
 })
 

const express = require("express");
const app = express();

let tasks=[];
let publicPath=__dirname+'/public';

app.use(express.static(publicPath));
app.use(express.urlencoded({extended:true}));

app.set('view engine', 'hbs');

app.get("/", (req, res) => {
  res.render("index",{
      tasks
  });
});

app.post("/", (req, res) => {
    tasks.push(req.body.task);
    res.redirect('/');
  });

app.listen(3000, () => { 
  console.log("listening on port 3000");
});


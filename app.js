const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
  }));

app.set("view engine", "ejs");

let items = [];

app.get("/", function(req, res){
    res.render("index.ejs", {
        newItems: items
    });
});

app.post("/", function(req, res){
    items.push(req.body.item);

    res.redirect("/");
});

app.listen(3000, function(){
    console.log("Server started successfully on port 3000");
});
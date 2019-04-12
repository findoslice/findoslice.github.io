const express = require("express");
const Remarkable = require("remarkable");
const meta = require("remarkable-meta");
const fs = require("fs");

const app = new express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
let md = new Remarkable({
                        linkify: true,
                        breaks: true,
                        html: true
});
md.use(meta);

app.get("/posts", (req, res) => {
    let response = []
    fs.readdirSync("./blogposts").forEach( file => {
            let html = md.render(fs.readFileSync("./blogposts/" + file, 'utf-8'));
            md.meta.name = file.split(".")[0]
            if (!md.meta.draft) {
                response.push({meta : md.meta, body : html});
            }
    });
    res.json(response);
});

app.listen(4000, () => {"Now listening on port 4000"})
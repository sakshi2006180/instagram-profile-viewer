const express = require("express");
const app = express();

const port = 8080;
const path = require("path");

app.use(express.static(path.join(__dirname,"public")));
app.set("view engin","ejs");
app.set("views",path.join(__dirname,"./views"));

app.get("/",(req, res) => {
    res.render("home.ejs")
});

app.get("/ig/:username", (req,res) => {
    let { username } = req.params;
    let instaData = require("./data.json");
    const data = instaData[username];
    if (data){
    res.render("instagram.ejs",{data} );
    } else {
    res.render("error.ejs");
    }
});
app.listen(port, () => {
    console.log(`listing on port ${port}`)
})
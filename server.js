const express = require('express');
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "/index.html"));
})

app.listen(PORT, async function () {
    console.log(`SERVER LISTENING ON: http://loalhost:${PORT}`);
    console.log('-------------------------------');

});
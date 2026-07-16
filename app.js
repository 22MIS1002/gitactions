const express = require('express');

const app = express();

app.get('/search', (req, res) => {

    const userInput = req.query.q;

    eval(userInput);

    res.send("Executed");
});

app.listen(3000);

console.log("Hi");
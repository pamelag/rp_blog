/* eslint no-console: 0 */
const express = require('express');
const cors = require('cors');
const fs = require('fs');

const buffer = fs.readFileSync('./data.json');
const postsObj = JSON.parse(buffer);
const app = express();
app.use(cors());


app.get('/posts', (req, res) => {
    const json = JSON.stringify(postsObj);
    res.end(json);
});

console.log(`Starting server on port 3002`);
console.log(`Generating new random ratings`);
app.listen(3002);

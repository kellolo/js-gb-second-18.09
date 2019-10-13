const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());
app.use('/', express.static('public'));
app.listen(3000, () => console.log('server listen on port 3000'));


app.get('/api/products', (req, res) => {
    fs.readFile('server/db/goods.json', 'utf-8', (req, res) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({result: 0, text: 'err'}))
        }
    })
})
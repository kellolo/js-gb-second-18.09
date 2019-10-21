const express = require('express');
const fs = require('fs');
const app = express();
const cartRouter = require('./cartRouter');

app.listen(3000, () => console.log('server listen on port 3000'));

app.use(express.json());
app.use('/', express.static('public'));
app.use('/api/cart', cartRouter);

app.get('/api/products', (req, res) => {
    fs.readFile('server/db/goods.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({result: 0, text: 'err'}));
        } else {
            res.send(data);
        }
    })
})
const express = require('express');

const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + '/static/'))

app.get('/api/v1', (req, res) => {
    res.send('Hello from Docker Node.js API !');
});

const server = app.listen(port, () => {
    console.log('BAR app listenning on', server.address().address, server.address().port);
});
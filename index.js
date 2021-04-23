const express = require('express');
const path = require('path');
const cors = require('cors');
const routes = require('./routes');
const lua = require('./lua');

const port = 80;
const server = express();
server.use(cors());
server.use(express.static(path.join(__dirname, '/public')))
server.use('/', routes);



server.listen(port, () => {
    console.log('Express on port', port);
    lua();
});
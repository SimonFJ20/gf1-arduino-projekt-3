import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

dotenv.config();
const server = express();

server.use(cors);
server.use(express.urlencoded({extended: true}));
server.use(express.json());


server.use('/', express.static(path.join(__dirname, 'public')));

const port = parseInt(process.env.HTTP_PORT!);
server.listen(port, () => {
    console.log('Server run on port', port);
})


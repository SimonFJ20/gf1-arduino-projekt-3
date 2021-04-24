import express from 'express';
import http from 'http';
import https from 'https';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import api from './api';


dotenv.config();
const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended: true}));

server.use('/api', api);
server.use(express.static(path.join(__dirname, '../public')));


try {
    const httpPort = parseInt(process.env.HTTP_PORT!);
    const httpsPort = parseInt(process.env.HTTPS_PORT!);

    const sslCert = fs.readFileSync(path.join(__dirname, '../ssl/cert.crt'));
    const sslKey = fs.readFileSync(path.join(__dirname, '../ssl/key.key'));

    http.createServer(server).listen(httpPort, () => {
        console.log('HTTP on port', httpPort);
    })

    https.createServer({cert: sslCert, key: sslKey}, server).listen(httpsPort, () => {
        console.log('HTTPS on port', httpsPort);
    })

    
} catch(error) {
    console.error(error);
}

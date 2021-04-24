import { Router } from 'express';
import mongodb from 'mongodb';
import dotenv from 'dotenv';

const router = Router();

const api = async () => {

    dotenv.config()
    const mongoURI = process.env.MONGODB;
    console.log(mongoURI)
    const client = new mongodb.MongoClient(mongoURI!, {useNewUrlParser: true, useUnifiedTopology: true});

    try {
        await client.connect();
        console.log('Connected to MongoDB Cloud');
    } catch(e) {
        console.error(e);
    }
    
    const database = client.db('ArduinoProjekt3');
    const Sketches = database.collection('sketches');

    router.get('/sketches/getall', async (req, res) => {
        
    });

    router.post('/sketches/create', async (req, res) => {
        try {
            const sketch = {
                title: req.body.title,
                description: req.body.description,
                author: req.body.author,
                content: req.body.content
            }
        } catch(error) {
            res.status(500).json({success: false, status: 'error'});
            console.error('Error on /sketches/create', error)
        }
    })

}

api();
export default router;
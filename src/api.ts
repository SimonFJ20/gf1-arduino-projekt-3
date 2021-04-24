import { Router } from 'express';
import mongodb, { ObjectId } from 'mongodb';
import dotenv from 'dotenv';

interface SketchInterface {
    title: string,
    description: string,
    author: string,
    content: string,
    _id?: ObjectId
}

const router = Router();

const api = async () => {

    dotenv.config()
    const mongoURI = process.env.MONGODB;
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
            
            if(!req.body.title || !req.body.description || !req.body.author || !req.body.content) {
                res.status(400).json({success: false, status: 'incomplete'});
                return;
            }

            const sketch: SketchInterface = {
                title: req.body.title,
                description: req.body.description,
                author: req.body.author,
                content: req.body.content
            }

            const existingTitle: SketchInterface = await Sketches.findOne({title: sketch.title});
            if(existingTitle) {
                res.status(400).json({success: false, status: 'title taken'});
                return;
            }

            const insert = await Sketches.insertOne(sketch);            
            res.json({success: true, status: 'success', insert: insert.ops[0]})
        } catch(error) {
            res.status(500).json({success: false, status: 'error'});
            console.error('Error on /sketches/create', error)
        }
    })

}

api();
export default router;
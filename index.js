const express = require("express");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();
//middleware
app.use(cors())
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.gniuvqv.mongodb.net/?retryWrites=true&w=majority`;
 console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{
        const movieCollections = client.db('movieAppDB').collection('MoviesData')
    

         app.get('/movies', async (req, res) => {
             const query = {};
             const movies = await movieCollections.find(query).toArray();
             res.send(movies);
         })

         app.get('/movies/:id', async(req, res) => {
                const id = req.params.id;
              
                const query = { _id: new ObjectId(id) };
                const movies = await movieCollections.findOne(query);
                
                res.send(movies);
          });
    }
    finally{

    }
}
run().catch(console.log);

app.get('/', async (req, res) => {
    res.send('movie server running')
})

app.listen(port, () => console.log(`movie server listening on ${port}`))
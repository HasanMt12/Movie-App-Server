const express = require("express");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require('mongodb');
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
        const productCollections = client.db('reusableProductSell').collection('sellProduct')
               
    }
    finally{

    }
}
run().catch(console.log);

app.get('/', async (req, res) => {
    res.send('movie server running')
})

app.listen(port, () => console.log(`movie server listening on ${port}`))
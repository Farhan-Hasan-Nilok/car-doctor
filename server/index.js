const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 3000;

// middlewares
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.kqr4p9m.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const verifyJWT = (req, res, next) =>{
    const authorization = req.headers.authorization;
    if(!authorization){
        return res.status(401).send({error: true, message: 'unauthorized access'})
    }
    const token = authorization.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_KEY, (error, decoded) => {
        if(error){
            return res.status(403).send({error: true, message: 'forbidden'})
        }
        req.decoded = decoded;
        next()
    })
}

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);
const serviceCollection = client.db('carDoctor').collection('services');
const productCollection = client.db('carDoctor').collection('products');
const featureCollection = client.db('carDoctor').collection('features');
const bookingCollection = client.db('carDoctor').collection('bookings');

// jwt token will generate when client side hit the route
app.post('/authorization', (req, res) => {
    const user = req.body;
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_KEY, { expiresIn: '1h' });
    res.send({ token });
    console.log(token);
})


app.get('/services', async (req, res) => {
    const cursor = serviceCollection.find();
    const result = await cursor.toArray();
    res.send(result);
});

app.get('/service/:id', async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) }
    const options = {
        projection: { title: 1, price: 1, img: 1 }
    };

    const result = await serviceCollection.findOne(query, options);
    res.send(result);

});

app.get('/products', async (req, res) => {
    const cursor = productCollection.find();
    const result = await cursor.toArray();
    res.send(result)
});
app.get('/features', async (req, res) => {
    const cursor = featureCollection.find();
    const result = await cursor.toArray();
    res.send(result)
});


//read or load bookings data for specifice email
app.get('/bookings', verifyJWT, async (req, res) => { //  the url will look like this http://localhost:3000/bookings?email=${user?.email}
    let query = {};
    const decoded = req.decoded;
    if (decoded.email !== req.query.email) {
        return res.status(403).send({ error: true, message: 'forbidden' });
    }
    if (req.query?.email) {
        query = { email: req.query.email }
    }
    const result = await bookingCollection.find(query).toArray();
    res.send(result);
});

// fetching all booking data for admin
app.get('/all-bookings', async (req, res) => {
    const result = await bookingCollection.find().toArray();
    res.send(result);
})

// create a booking for user
app.post('/bookings', async (req, res) => {
    const bookingData = req.body;
    const result = await bookingCollection.insertOne(bookingData);
    res.send(result);
});

// edit the data to create status field in the database and update the state
app.patch('/edit-bookings-status/:id', async (req, res) => {
    const id = req.params.id;
    const status = req.body.status;
    const filter = { _id: new ObjectId(id) };
    const updatedBooking = {
        $set: {
            status: status
        }
    };
    const result = await bookingCollection.updateOne(filter, updatedBooking)
    res.send(result);
})

// specific booking data will be deleted
app.delete('/bookings/:id', async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) }
    const result = await bookingCollection.deleteOne(query);
    res.send(result);
});

// all bookings will be deleted based on specific email address
app.delete('/delete-bookings', async (req, res) => {
    let query = { email: req.query?.email }
    const result = await bookingCollection.deleteMany(query);
    res.send(result);
    console.log(req.query.email);
})




app.get('/', (req, res) => {
    res.send('Car Doctor Server is Online')
});

app.listen(port, () => {
    console.log(`Car Doctor Server is running on port ${port}`)
})


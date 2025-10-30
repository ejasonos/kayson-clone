import express from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import { MongoClient, ServerApiVersion } from 'mongodb'
import cors from 'cors'

const app = express()
dotenv.config()

// start of database connection code
const uri = process.env.MONGO_URL;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("kaysonclone").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);

// end of database connection code

const router = express.Router()

/******** This code helps to resolve route issues from backend to frontend *******/

// Remove for production
const allowedOrigins = [process.env.BACKEND, process.env.FRONTEND];
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('CORS policy: origin not allowed'));
        }
    }
};

//middleware
app.use(cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(router)

router.all('/', (req, res) => {
    res.json('Kayson Home Server page')
})

router.get('/bookvehicle', async (req, res) => {
    res.json("Book vehicle server is up")
})
router.post('/bookvehicle', async (req, res) => {
    try {

        const { firstname, surname, phone, email, pickuplocation, pickupdate, time, preference } = req.body

        if (!firstname || !surname || !phone || !email || !pickuplocation || !pickupdate || !time || !preference) {
            res.json("User missing some details")
            return
        }

        await client.connect()
        const db = client.db("kaysonclone")

        const collName = 'bookings'
        const existing = await db.listCollections({ name: collName })
        if (existing.length === 0) {
            await db.createCollection(collName)
            console.log('Created collection: ' + collName)
        }

        const contacts = db.collection(collName)
        // insert action
        const result = await contacts.insertOne({
            firstname: firstname, surname: surname, phone: phone, email: email, pickuplocation: pickuplocation, pickupdate: pickupdate, time: time, preference: preference, createdAt: new Date()
        })
        console.log('Inserted id:', result.insertedId)

        res.status(201).json({
            message: "User registered successfully",
            user: {
                firstname: firstname,
                surname: surname,
                phone: phone,
                email: email,
                pickuplocation: pickuplocation,
                pickupdate: pickupdate,
                time: time,
                preference: preference
            }
        });

    } catch (err) {
        console.error('Booking error', err)
        return res.status(500).json({ message: 'server error', error: err.message })
    }
    finally { await client.close() }

})

router.post('/contact', async (req, res) => {
    const { name, email, subject, message } = req.body

    if (!name || !email || !subject || !message) {
        res.status(401).json({
            message: "You have not filled the form "
        })
        return
    }

    try {
        await client.connect()
        const db = client.db("kaysonclone")

        const collName = 'contacts'
        const existing = await db.listCollections({ name: collName })
        if (existing.length === 0) {
            await db.createCollection(collName)
            console.log('Created collection: ' + collName)
        }

        const contacts = db.collection(collName)
        // insert action
        const result = await contacts.insertOne({
            name: name, email: email, subject: subject, message: message, createdAt: new Date()
        })
        console.log('Inserted id:', result.insertedId)

        res.status(201).json({
            message: "We will respond to you shortly!"
        })

    } catch (err) { throw err }
    finally { await client.close() }

})

app.listen(process.env.PORT, () => { console.log('Server up and running on port ' + process.env.PORT) })
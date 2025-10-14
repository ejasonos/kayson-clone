import express from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import { MongoClient, ServerApiVersion } from 'mongodb'
// import mongoose from 'mongoose' // local deployments
import cors from 'cors' // remove for production

const app = express()
dotenv.config()


const uri = "mongodb+srv://admin:0Ik91XSzxK800GMR@cluster0.j5o04ar.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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

app.listen(process.env.PORT ?? 3000, () => {
  console.log('Server running')
})


// const connect = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL)
//     console.log('Mongodb connected')
//   } catch (err) {
//     console.error('Error: ' + err)
//   }
// }

const router = express.Router()

/******** This code helps to resolve route issues from backend to frontend *******/

// Remove for production
const allowedOrigins = [process.env.BACKEND_URL, process.env.FRONTEND_URL];

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
app.use(cors(corsOptions)); // remove for production
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(router)

router.all('/', (req, res) => {
  res.json('Kayson Home Server page')
})

import booking from './bookingModel.js'
import Contact from './contactModel.js'

router.get('/bookvehicle', (req, res) => {
  res.json("Book vehicle server is up")
})
router.post('/bookvehicle', async (req, res) => {
  try {

    const { firstname, surname, phone, email, pickuplocation, pickupdate, time, preference } = req.body

    if (!firstname || !surname || !phone || !email || !pickuplocation || !pickupdate || !time || !preference) {
      res.json("User missing some details")
      return
    }

    const newBooking = await booking.create({
      firstname: firstname,
      surname: surname,
      phone: phone,
      email: email,
      pickuplocation: pickuplocation,
      pickupdate: pickupdate,
      time: time,
      preference: preference
    })

    await newBooking.save()

    res.status(201).json({
      message: "User registered successfully",
      // token
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
})

router.post('/contact', async (req, res) => {
  const { name, email, subject, message } = req.body

  if (!name || !email || !subject || !message) {
    res.status(401).json({
      message: "You have not filled the form "
    })
    return
  }

  const newContact = await Contact.create({
    name: name,
    email: email,
    subject: subject,
    message: message
  })
  await newContact.save()

  res.status(201).json({
    message: "We will respond to you shortly!"
  })
})

router.get('/complaint', async (req, res) => {
  try {
    const issues = await Contact.find()
    console.log('accessed from api ' + issues)
    res.status(200).json(issues) // this returns the issues data to the frontend
  } catch (err) {
    console.error("Root handler error: ", err)
    res.status(500).json({ message: "server error" })
  }
})

import express from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { MongoClient, ServerApiVersion } from 'mongodb'
import cors from 'cors'

const app = express()
dotenv.config()

const mongoUri = process.env.MONGO_URL;

// Connect with mongoose directly. Do not mix MongoClient with mongoose models.
async function connectDBAndStartServer() {
  if (!mongoUri) {
    console.error('No MongoDB URI provided in environment (MONGO_URL or MONGO_URL_LOCAL)');
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoUri);
    console.log('MongoDB connected (mongoose)');

    // Ensure collections exist using native MongoDB driver (safe even if you mix clients)
    await ensureCollectionsExist(mongoUri, ['bookings', 'contacts']);

    app.listen(process.env.PORT || 3000, () => {
      console.log('Server running on port', process.env.PORT ?? 3000);
    });
  } catch (err) {
    console.error('Mongo connect error:', err);
    process.exit(1);
  }
}

connectDBAndStartServer();


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

// router.get('/complaint', async (req, res) => {
//   try {
//     const issues = await Contact.find()
//     console.log('accessed from api ' + issues)
//     res.status(200).json(issues) // this returns the issues data to the frontend
//   } catch (err) {
//     console.error("Root handler error: ", err)
//     res.status(500).json({ message: "server error" })
//   }
// })

/**
 * Ensure collections exist using the native MongoDB driver.
 * This is a small compatibility helper for setups that mix mongoose and MongoClient.
 */
async function ensureCollectionsExist(uri, collections = []) {
  if (!uri) return;
  let client;
  try {
    client = new MongoClient(uri);
    await client.connect();
    const dbName = (new URL(uri.startsWith('mongodb+') ? uri.replace('mongodb+srv://', 'https://') : uri)).pathname?.replace('/', '') || 'kaysonclone';
    const db = client.db(dbName || 'kaysonclone');

    const existing = await db.listCollections().toArray();
    const existingNames = existing.map((c) => c.name);

    for (const name of collections) {
      if (!existingNames.includes(name)) {
        console.log(`Creating missing collection: ${name}`);
        await db.createCollection(name);
      }
    }
  } catch (err) {
    console.warn('ensureCollectionsExist error (non-fatal):', err.message || err);
  } finally {
    if (client) await client.close();
  }
}

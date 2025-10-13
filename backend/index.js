import express from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
// import cors from 'cors'


const app = express()
dotenv.config()

const PORT = process.env.PORT

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL)
    // console.log('Mongodb connected')
  } catch (err) {
    console.error('Error: ' + err)
  }
}

const router = express.Router()
/******** This code helps to resolve route issues from backend to frontend *******/
/* const allowedOrigins = [process.env.BACKEND_URL || 'http://localhost:3000', process.env.FRONTEND_URL || 'http://localhost:5173'];

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
*/
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(router)

/* router.all('/', (req, res) => {
  res.json('Kayson Home Server page')
})
*/

import booking from './bookingModel.js'
import Contact from './contactModel.js'

/* router.get('/bookvehicle', (req, res) => {
  res.json("Book vehicle server is up")
})
*/

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
      message: "User registered successfully"
    });

  } catch (err) {
    console.error('Booking error', err)
    return res.status(500).json({ message: 'server error', error: err.message })
  }
})

router.post('/contact', async (req, res)=>{
  const {name, email, subject, message } = req.body

  if (!name || !email || !subject || !message) {
    res.status(401).json({
      message: "You have not filled the form"
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

connect().then(() => {
  // console.log('Mongodb connected')
  app.listen(PORT)
})

import mongoose from 'mongoose'

const bookingSchema = new mongoose.Schema({
    firstname: {type: String, required: true},
    surname: {type: String, required: true},
    phone: {type: String, required: true},
    email: {type: String, required: true},
    pickuplocation: {type: String, required: true},
    pickupdate: {type: String, required: true},
    time: {type: String, required: true},
    preference: {type: String, required: true},
})

const booking = mongoose.model('Booking', bookingSchema)

export default booking
import mongoose from 'mongoose'

const email = mongoose.Schema({
    email: {type: String, required: true},
    date: {type: String, required: true}
})

const Email = mongoose.model('Email', email)

export default Email
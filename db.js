const mongoose = require('mongoose')

var mongoURL = 'mongodb+srv://sujitk:sujitk@cluster0.9tc6v.mongodb.net/mern-rooms'

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true })

var connection = mongoose.connection

connection.on('error', () => {
    console.log('MongoDB Connection Failed')
})

connection.on('connected', () => {
    console.log('MongoDB Connection Successful')
})

module.exports = mongoose
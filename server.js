const express = require('express')
const dbconfig = require('./db')
const app = express();
const roomsRoute = require('./routes/roomsRoute')
app.use(express.json())

const port = process.env.PORT || 5000;

app.use('/api/rooms', roomsRoute)

app.listen(port, () => {
    console.log(`server is running on port ${port} ️‍🔥`)
})

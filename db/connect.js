require('dotenv').config()
const mongoose = require('mongoose')
const DB = process.env.MONGODB_URL

mongoose.connect(DB)
    .then(() => console.log('connection successfull..'))
    .catch((err) => console.log('connection not successfull..', err))
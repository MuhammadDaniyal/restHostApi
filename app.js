require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000

require('./db/connect')
const routes_product = require('./routes/index')

app.get('/', (req, res) => {
    res.send('Hello, Webpage')
})

// middleware to set routes
app.use('/api/products', routes_product)

const startServer = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`server listen at ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

startServer()
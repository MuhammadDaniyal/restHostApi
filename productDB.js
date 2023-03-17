const Product = require('./models/productSchema')
const ProductJSON = require('./products.json')
require('./db/connect')

const start = async () => {
    try {
        // await Product.deleteMany()
        await Product.create(ProductJSON)
        console.log('Success');
    } catch (error) {
        console.log(error);
    }
}

start()
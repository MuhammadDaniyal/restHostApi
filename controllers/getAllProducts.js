// controller path py jo kaam hona woh btata hy
const Product = require('../models/productSchema')

const getAllProducts = async (req, res) => {

    const { company, name, select } = req.query

    const queryObject = {}

    // Query Searching 
    if (company) {
        queryObject.company = company
    }
    if (name) {
        queryObject.name = name
    }

    // advance search funcationlity
    // Full text search , filter feature  with regex
    // regex: Provides regular expression capabilities for pattern matching strings in queries.
    if (name) {
        queryObject.name = {
            $regex: name, $options: 'i' // option: i means case insensitive upper lower case py farq ni prega
        }
    }

    let apiData = Product.find(queryObject)

    // Select Condition
    if (select) {
        // let selectFix = select.replace(',', ' ')
        let selectFix = select.split(',').join(' ')
        apiData = apiData.select(selectFix)
    }

    // Pagination
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 3;
    let skip = (page - 1) * limit
    const myData = await apiData.skip(skip).limit(limit)


    // const myData = await apiData
    // const myData = await Product.find(req.query)
    res.status(200).json({ myData, nbHits: myData.length })
}

const getAllProductsTesting = async (req, res) => {
    const { sort } = req.query

    const queryObject = {}

    let apiData = Product.find({})
    // console.log(apiData);
    // Sort Condition - Query Searching 
    if (sort) {
        let sortFix = sort.replace(',', ' ')
        apiData = apiData.sort(sortFix)
    }
    const myData = await apiData
    res.status(200).json([myData])
}

module.exports = { getAllProducts, getAllProductsTesting }


// Pagination:
//  Page, Page Number, Limits
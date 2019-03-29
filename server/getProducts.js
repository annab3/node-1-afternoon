const products = require("./products.json");

const getProducts = (req, res) => {
    if(req.query.price) {
        res.json(products.filter(product => product.price >= +req.query.price))
    }
    else{
        res.status(200).json(products)
    }  
}


module.exports = getProducts;
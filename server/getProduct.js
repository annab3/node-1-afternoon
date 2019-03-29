const products = require("./products.json");

const getProduct = (req, res) => {
    const product = products.find(product => product.id === +req.params.id);
    if(products.includes(product)) {
        res.json(product);
    } else {
        res.status(500).json({error: "Item not in list"});
    }   
}

module.exports = getProduct;
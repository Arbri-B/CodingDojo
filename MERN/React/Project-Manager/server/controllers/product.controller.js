const Product = require('../models/product.model');    /* this is new */

module.exports.getAllProducts = (req, response) => {
    Product.find()
        .then((allProducts) => {
        response.json({ products : allProducts})
    })

    .catch((err) => {
        console.log(err)
        response.json({ message : 'Something went wrong!', err})
    });
}
    
module.exports.createProduct = (req, response) => {
    Product.create(req.body)
        .then((newlyCreatedProduct) => {
        response.json({ product : newlyCreatedProduct})
    })

    .catch((err) => {
        console.log(err)
        response.json({ message : 'Something went wrong!', err})
    });
}

module.exports.getOneProduct = (req, response) => {
    Product.find({_id : req.params.id})
        .then((oneProduct) => {
        response.json({ product : oneProduct})
    })

    .catch((err) => {
        console.log(err)
        response.json({ message : 'Something went wrong!', err})
    });
}

module.exports.getOneProductAndUpdate = (req, response) => {
    Product.findOneAndUpdate(
        { _id: req.params.id},
        req.body,
        {new : true, runValidators : true}
    )
        .then((updatedProduct) => {
        response.json({ product : updatedProduct})
    })

    .catch((err) => {
        console.log(err)
        response.json({ message : 'Something went wrong!', err})
    });
}

module.exports.deleteProduct = (req, response) => {
    Product.deleteOne({_id : req.params.id})
        .then((result) => {
        response.json({ result : result})
    })

    .catch((err) => {
        console.log(err)
        response.json({ message : 'Something went wrong!', err})
    });
}

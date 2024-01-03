const ProductController = require('../controllers/product.controller');
module.exports = (app) => {
    app.get('/api/products', ProductController.getAllProducts);
    app.post('/api/product', ProductController.createProduct);     
    app.get('/api/product/:id', ProductController.getOneProduct);
    app.put('/api/product/:id', ProductController.getOneProductAndUpdate);
    app.delete('/api/product/:id', ProductController.deleteProduct);


}


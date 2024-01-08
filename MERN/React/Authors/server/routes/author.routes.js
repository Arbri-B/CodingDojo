const AuthorController = require('../controllers/author.controller');
module.exports = (app) => {
    // app.get('/api', AuthorController.index);
    app.get('/api/authors', AuthorController.getAllAuthors);
    app.post('/api/authors', AuthorController.createAuthor); 
    app.get('/api/author/:id', AuthorController.getOneAuthor);
    app.put('/api/author/:id', AuthorController.getOneAuthorAndUpdate);
    app.delete('/api/author/:id', AuthorController.deleteAuthor);


}
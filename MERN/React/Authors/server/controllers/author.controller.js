const Author = require('../models/author.model');
module.exports.getAllAuthors = (req, res) => {
    Author.find()
        .then((allDaAuthors) => {

            res.json({
                authors: allDaAuthors
            })
        })
        .catch((err) => {
            res.json({
                message: 'Something went wrong',
                error: err
            })
        });
}

module.exports.getOneAuthor = (req, res) => {
    Author.findOne({
            _id: req.params.id
        })
        .then(oneSingleAuthor => {
            res.json({
                author: oneSingleAuthor
            })
        })
        .catch((err) => {

            res.json({
                message: 'Something went wrong',
                error: err
            })
        });
}

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(newlyCreatedAuthor => {
            res.json({
                author: newlyCreatedAuthor
            })
        })
        .catch((err) => {
            res.json({
                message: 'Something went wrong',
                error: err
            })
        });
}

module.exports.getOneAuthorAndUpdate = (req, res) => {
    Author.findOneAndUpdate({
                _id: req.params.id
            },
            req.body, {
                new: true,
                runValidators: true
            }
        )
        .then(updatedAuthor => {
            res.json({
                author: updatedAuthor
            })
        })
        .catch((err) => {
            res.json({
                message: 'Something went wrong',
                error: err
            })
        });
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({
            _id: req.params.id
        })
        .then(result => {
            res.json({
                result: result
            })
        })
        .catch((err) => {
            res.json({
                message: 'Something went wrong',
                error: err
            })
        });
}
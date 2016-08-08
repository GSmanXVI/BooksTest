var express = require('express');
var router = express.Router();
var fs = require('fs');
var models = require('../models');

router.get('/books', function(req, res, next) {
    models.books.findAll({
        attributes: ['id', 'name', 'author', 'year', 'image'],
        include: [models.genres]
    }).then(function(books) {
        for (var book of books) {
            book.dataValues.genre = book.dataValues.genre.name;
        }
        res.send(books);
    });
});

router.get('/books/:id', function(req, res, next) {
    var bookId = req.params.id;
    models.books.findOne({
        include: [models.genres],
        where: {
            id: bookId
        }
    }).then(function(book) {
        book.dataValues.genre = book.dataValues.genre.name;
        res.send(book);
    });
});

router.post('/books', function(req, res, next) {
    var data = req.body;
    var book = models.books.build(data);
    book.save().then(function() {
        res.send('Ok');
    });
});

router.put('/books/:id', function(req, res, next) {
    var bookId = req.params.id;
    var data = req.body;
    data.id = +bookId;
    delete data.genre;
    models.books.findOne({
        where: {
            id: bookId
        }
    }).then(function(book) {
        return book.update(data);
    }).then(function() {
        res.send('Ok');
    });
});

router.delete('/books/:id', function(req, res, next) {
    var bookId = req.params.id;
    var filename;
    models.books.findOne({
        where: {
            id: bookId
        }
    }).then(function(book) {
        filename = book.image;
        console.log(filename);
        return book.destroy();
    }).then(function() {
        fs.unlinkSync(__dirname + '/../public/' + filename);
        res.send('Ok');
    });
});

router.get('/genres', function(req, res, next) {
    models.genres.findAll().then(function(genres) {
        res.send(genres);
    });
});

router.post('/books/upload', function(req, res, next) {
    console.log("UPLOAD");
    var fstream;
    var ms = new Date() / 1;
    req.pipe(req.busboy);
    req.busboy.on('file', function(fieldname, file, filename) {
        console.log("Uploading: " + filename);
        fstream = fs.createWriteStream(__dirname + '/../public/data/' + ms + filename);
        file.pipe(fstream);
        fstream.on('close', function() {
            res.send(ms + filename);
        });
    });
});

module.exports = router;

module.exports = function (app, controller) {

  app.get('/api/books', controller.getBooks);

  app.get('/api/books/:id', controller.getBookById);

};
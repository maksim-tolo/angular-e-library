module.exports = function (connection) {

  function Data(bookName, bookType, publisher, author, publicationDate, numberOfPages, editor, price) {
    this.bookName = bookName || "bookNamebookName";
    this.bookType = bookType || "book";
    this.publicationDate = publicationDate || new Date();
    this.publisher = publisher || "publisherpublisher";
    this.author = author || "authorauthor";
    this.numberOfPages = numberOfPages || 1000;
    this.editor = editor || "editoreditor";
    this.price = price || 100000;
  }

  connection.query('INSERT INTO books set ' + connection.escape(new Data()), function (err) {
    if (err) {
      console.log(err);
    }
  });
  connection.query('INSERT INTO books set ' + connection.escape(new Data()), function (err) {
    if (err) {
      console.log(err);
    }
  });
  connection.query('INSERT INTO books set ' + connection.escape(new Data()), function (err) {
    if (err) {
      console.log(err);
    }
  });
};
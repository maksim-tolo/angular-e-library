module.exports = function (connection) {
  var q = "CREATE TABLE IF NOT EXISTS books " +
    "(id INTEGER AUTO_INCREMENT," +
    "bookName VARCHAR(50) NOT NULL," +
    "bookType ENUM ('book', 'newspaper', 'magazine') NOT NULL," +
    "publicationDate DATE NOT NULL," +
    "publisher VARCHAR(50) NOT NULL," +
    "author VARCHAR(50) NOT NULL," +
    "numberOfPages INTEGER NOT NULL," +
    "editor VARCHAR(50) NOT NULL," +
    "price INTEGER NOT NULL," +
    "PRIMARY KEY (id))";

  connection.query(q, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Table 'books' Created");
    }
  });
};
module.exports = function (pool) {
  return {
    getBooks: function (callback) {
      pool.getConnection(function (err, connection) {
        if (err) {
          return callback({err: err});
        }
        var q = 'SELECT * FROM books';

        callback && connection.query(q, function (err, result) {
          connection.release();
          callback(err ? {err: err} : result);
        });
      });
    },
    getBookById: function (bookId, callback) {
      pool.getConnection(function (err, connection) {
        if (err) {
          return callback({err: err});
        }
        var q = 'SELECT * FROM books where id = ?';

        callback && connection.query(q, bookId, function (err, result) {
          connection.release();
          callback(err ? {err: err} : result);
        });
      });
    }
  };
};
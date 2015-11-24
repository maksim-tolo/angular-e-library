module.exports = function (pool) {
  return {
    getBooks: function (filters, callback) {
      pool.getConnection(function (err, connection) {
        if (err) {
          return callback({err: err});
        }
        var q = 'SELECT * FROM books';

        if (filters) {
          q += ' WHERE ';
          if (filters.price) {
            if (filters.price.from !== null && filters.price.from !== undefined) {
              q += 'price >= ' + connection.escape(filters.price.from) + ' AND '
            }
            if (filters.price.to !== null && filters.price.to !== undefined) {
              q += 'price <= ' + connection.escape(filters.price.to) + ' AND ';
            }
          }
          if (filters.numberOfPages) {
            if (filters.numberOfPages.from !== null && filters.numberOfPages.from !== undefined) {
              q += 'numberOfPages >= ' + connection.escape(filters.numberOfPages.from) + ' AND '
            }
            if (filters.numberOfPages.to !== null && filters.numberOfPages.to !== undefined) {
              q += 'numberOfPages <= ' + connection.escape(filters.numberOfPages.to) + ' AND ';
            }
          }
          if (filters.publicationDate && filters.publicationDate.date) {
            q += 'publicationDate = ' + connection.escape(new Date (filters.publicationDate.date)) + ' AND '
          }
          if (filters.bookType) {
            q += '(';
            filters.bookType.selected.forEach(function(el, index) {
              if (el) {
                q += 'bookType = ' + connection.escape(filters.bookType.list[index]) + ' OR '
              }
            });
            if (q.slice(-3) === 'OR ') {
              q = q.slice(0, -3);
            }
            if (q.slice(-1) === '(') {
              q += 'bookType = ' + connection.escape(null);
            }
            q += ')';
          }
        }

        if (q.slice(-6) === 'WHERE ') {
          q = q.slice(0, -6);
        }
        if (q.slice(-4) === 'AND ') {
          q = q.slice(0, -4);
        }

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
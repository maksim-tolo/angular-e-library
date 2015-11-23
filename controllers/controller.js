module.exports = function (dataService) {

  function badRequestHandler(next) {
    var err = new Error('Bad Request');
    err.status = 400;
    return next(err);
  }

  return {
    getBooks: function (req, res, next) {
      dataService.getBooks(function (data) {
        if (data && data.err) {
          next(data.err);
        } else {
          res.send(data);
        }
      });
    },
    getBookById: function (req, res, next) {
      dataService.getBookById(+req.params.id, function (data) {
        if (data && data.err) {
          next(data.err);
        } else {
          res.send(data);
        }
      });
    }
  };
};
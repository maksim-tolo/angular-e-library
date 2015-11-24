module.exports = function (dataService) {

  return {
    getBooks: function (req, res, next) {
      var filters = null;

      if (Object.keys(req.query).length) {
        filters = {};
        for (var filter in req.query) {
          if (req.query.hasOwnProperty(filter)) {
            filters[filter] = JSON.parse(req.query[filter]);
          }
        }
      }
      dataService.getBooks(filters, function (data) {
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
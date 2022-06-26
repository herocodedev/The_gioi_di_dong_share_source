module.exports = function APIFeatures(query, queryString) {
  // This === {}
  this.query = query; // Products.find({})
  this.queryString = queryString; // req.query

  // Paginate
  this.paginating = () => {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 10;
    const skip = limit * (page - 1);
    const products = this.query.limit(limit).skip(skip);
    return this;
  };
  // Products.find({}).limit(limit).skip(skip)

  // Sort
  this.sorting = () => {
    const sort = this.queryString.sort || "-createdAt";
    this.query = this.query.sort(sort);
    return this;
  };

  // Count
  this.counting = () => {
    this.query = this.query.count();
    return this;
  };

  // Products.find({}).limit(limit).skip(skip).sort()

  // Search --> mark index
  this.searching = () => {
    const search = this.queryString.search;
    if (search) {
      this.query = this.query.find({
        $text: {
          $search: search,
        },
      });
    } else {
      this.query = this.query.find({});
    }
    return this;
  };

  // Filter
  this.filtering = () => {
    const queryObj = { ...this.queryString };
    const excludedFields = ["page", "sort", "limit", "search"];
    excludedFields.forEach((el) => delete queryObj[el]);
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(
      /\b(gte|gt|lt|lte|regex)\b/g,
      (match) => "$" + match
    );

    const newQuery = JSON.parse(queryStr);
    this.query = this.query.find(newQuery);
    return this;
  };
};

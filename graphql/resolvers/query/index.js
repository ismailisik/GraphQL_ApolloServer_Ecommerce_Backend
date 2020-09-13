const categoryQuery = require('./category');
const supplierQuery = require('./supplier');

const Query = {
    ...categoryQuery,
    ...supplierQuery,
}

module.exports = Query;
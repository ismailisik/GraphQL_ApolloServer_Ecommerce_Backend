const categoryQuery = require('./category');
const supplierQuery = require('./supplier');
const productQueries = require('./product');

const Query = {
    ...categoryQuery,
    ...supplierQuery,
    ...productQueries,
}

module.exports = Query;
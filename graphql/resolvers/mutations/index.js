const categoryMutations = require('./category');
const sequenceMutations = require('./sequence');
const supplierMutations = require('./supplier');
const productMutations = require('./product');

const Mutation = {
    ...categoryMutations,
    ...sequenceMutations,
    ...supplierMutations,
    ...productMutations,
}

module.exports = Mutation;
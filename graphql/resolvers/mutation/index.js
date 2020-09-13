const categoryMutations = require('./category');
const sequenceMutations = require('./sequence');
const supplierMutations = require('./supplier');

const Mutation = {
    ...categoryMutations,
    ...sequenceMutations,
    ...supplierMutations,
}

module.exports = Mutation;
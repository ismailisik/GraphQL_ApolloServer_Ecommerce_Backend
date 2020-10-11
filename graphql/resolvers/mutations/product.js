const getNextSequenceValue = require('../../../helpers/autoIncrement/autoIncrement');

module.exports = {
    saveProduct: async (parent, {input}, ctx) => {
      const newProduct = {
          _id: await getNextSequenceValue('productId', ctx.Sequence),
          ...input
      };

      const result =  ctx.Product(newProduct).save().
      then(result => {}).
      catch(err => new Error(`Error Message: ${err}`));

      return await result;
    },
    updateProduct: async (parent, {id, input}, ctx) => {
      const response = ctx.Product.findOneAndUpdate({_id:id}, {...input}, {new:true}).
      then(result => {}).
      catch(err => new Error(`Error Message: ${err}`));

      return await response;
    },
    deleteProduct: async (parent, {id}, ctx) => {
      const response = await ctx.Product.findOneAndDelete({_id:id});

      return response;
    }
}
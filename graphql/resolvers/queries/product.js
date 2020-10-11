module.exports = {
    products: async (parent, args, ctx) => {
        return await ctx.Product.find({});
    },
    product: async (parent, {id}, ctx) => {
        return await ctx.Product.findById(id);
    }
}
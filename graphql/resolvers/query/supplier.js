module.exports = {
    suppliers: async (parent,args,ctx) => {
        return await ctx.Supplier.find({});
    },
    supplier: async (parent, {id},ctx) => {
      return await ctx.Supplier.findById(id);
    },
}
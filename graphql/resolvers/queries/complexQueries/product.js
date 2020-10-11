const Product = {
    category: async (parent,args,ctx)=>{
        return await ctx.Category.findById(parent.category);
    },
    supplier: async (parent,args,ctx)=>{
        return await ctx.Supplier.findById(parent.supplier);
    }
}

module.exports = Product;
module.exports = {
    categories : async (parent,args,ctx) => {
        return await ctx.Category.find({});
    },

    category : async (parent, {id},ctx) => {
        return await ctx.Category.findById(id);
    },
}




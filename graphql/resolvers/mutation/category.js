module.exports = {
    saveCategory : async (parent,args,ctx) =>{
        const isCategoryName=await ctx.Category.findOne({categoryName:args.data.categoryName});
        if (isCategoryName){
            throw new Error('This Category Already Exist');
        }

        const newCategory = {
           ...args.input
        };

        const response = await ctx.Category(newCategory).save();

        return response;
    },
    updateCategory : async (parent, {id,data},ctx) => {
        const response = ctx.Category.findOneAndUpdate({_id:id},{...data},{new:true});
        return response;
    },
    deleteCategory: async (parent, {id},ctx) => {
        const result = ctx.Category.findOneAndDelete({_id:id});
    }
}

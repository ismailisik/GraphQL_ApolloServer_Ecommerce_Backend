const getNextSequenceValue = require('../../../helpers/autoIncrement/autoIncrement');

module.exports = {
    saveCategory : async (parent, {input},ctx) =>{
        const isCategoryName = await ctx.Category.findOne({name:input.name})

        if (isCategoryName){
            throw new Error('This Category Already Exist');
        }
        const newCategory = {
            _id: (await getNextSequenceValue('categoryId',ctx.Sequence)),
           ...input
        };

        const response = await ctx.Category(newCategory).save();

        return response;
    },
    updateCategory : async (parent, {id,input},ctx) => {
        const response = ctx.Category.findOneAndUpdate({_id:id},{...input},{new:true});
        return response;
    },
    deleteCategory: async (parent, {id},ctx) => {
        const response = await ctx.Category.findOneAndDelete({_id:id});

        return response;
    }
}

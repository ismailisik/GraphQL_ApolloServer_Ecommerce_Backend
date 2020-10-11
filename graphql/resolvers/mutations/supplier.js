const getNextSequenceValue = require('../../../helpers/autoIncrement/autoIncrement');

module.exports = {
    saveSupplier: async (parent, {input},ctx) => {
        const isSupplier = await ctx.Supplier.findOne({companyName:input.companyName});

        if (isSupplier){
            throw new Error('This Supplier Already Exist');
        }

        const newSupplier = {
            _id: (await getNextSequenceValue('supplierId',ctx.Sequence)),
            ...input
        }
        console.log(newSupplier);
        const result = ctx.Supplier(newSupplier).save();

        return result;
    },
    updateSupplier: async (parent, {id,input},ctx) => {
        const result = ctx.Supplier.findOneAndUpdate({_id:id},{...input},{new:true});
        return result;
    },
    deleteSupplier: async (parent, {id},ctx) => {
        const result = ctx.Supplier.findOneAndDelete({_id:id});
    }
}
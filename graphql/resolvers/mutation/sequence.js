module.exports = {
    addSequence : async (parent,args,ctx) => {
        const newSequence = {
            ...args.input
        }
        const response = await ctx.Sequence(newSequence).save();

        return response;
    }
}
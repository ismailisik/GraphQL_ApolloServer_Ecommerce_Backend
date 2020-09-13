const getNextSequenceValue = async (sequenceName, collection) => {
    const sequenceDocument = await collection.findByIdAndUpdate(sequenceName,{
        $inc:{sequence_value:1}
    },{new:true});

    return sequenceDocument.sequence_value;
};

module.exports = getNextSequenceValue;


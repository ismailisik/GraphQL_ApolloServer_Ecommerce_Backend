const {ApolloServer} = require('apollo-server');
const {importSchema} =require('graphql-import')

//MongoDb Connection
require('../helpers/dbConnection/dbConnection')();

//DbContext
const context = require('../Entities');

//Resolver
const resolvers = require('../graphql/resolvers');

const server = new ApolloServer({
	typeDefs:importSchema('../graphql/schema.graphql'),
	resolvers,
	context
});

server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
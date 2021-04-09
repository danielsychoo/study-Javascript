import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

// means TypeDefinitions (만들었던 schema, text이므로 경로만 참조)
const typeDefs = "graphql/schema.graphql";

const server = new GraphQLServer({ typeDefs, resolvers });
// const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log("Server is running on localhost:4000"));

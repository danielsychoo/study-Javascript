// schema.graphql에서 define한 query를 resolve하는 역할

const resolvers = {
  Query: {
    name: () => "daniel", // <쿼리>: <타입이 맞는 결과물 return>
  },
};

export default resolvers;

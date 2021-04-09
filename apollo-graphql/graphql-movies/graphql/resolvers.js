// schema.graphql에서 define한 query를 resolve하는 역할

// data sourse
const daniel = {
  name: "daniel",
  age: 32,
  gender: "male",
};

const resolvers = {
  Query: {
    person: () => daniel, // <쿼리>: <schema와 타입이 맞는 결과물 return>
  },
};

export default resolvers;

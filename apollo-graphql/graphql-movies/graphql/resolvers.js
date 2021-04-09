// schema.graphql에서 define한 query를 resolve하는 역할

// data sourse
import { people, getById } from "./db";

const resolvers = {
  Query: {
    people: () => people,
    person: (_, { id }) => {
      console.log(id);
    },
    // person: (_, { id }) => getById(id),
  },
};

export default resolvers;

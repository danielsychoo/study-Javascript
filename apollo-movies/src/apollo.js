import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://movieql.now.sh/", // 실제로 사용할 API주소를 client를 만들때 1번만 입력하면 된다. 조쿠만
  cache: new InMemoryCache(),
});

export default client;

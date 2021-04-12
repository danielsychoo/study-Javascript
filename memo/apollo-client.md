# Apollo-client & GraphQL

## 환경설정
```javascript
npm i @apollo/client
npm i graphql
```

`@apollo/client`는 apollo-client를 사용하기위해 설치하고 `graphql`은 graphQL의 쿼리를 사용하기 위해 필요.

---

## Client 만들기
### 1) src/apollo.js
`apollo.js`파일 안에 apollo client를 만들고 필요한 곳에서 import해서 사용하려는 목적 .

각각의 data에 따른 요청 uri가 존재하는 restAPI와 달리 **GraphQL은 요청 uri를 하나만** 가지고 있으므로, 이처럼 한번 작성함으로서 지속적으로 uri를 작성할 필요가 없어진다.

```javascript
import { ApolloCilent, InMemoryCache } from '@Apollo/client'

const client = new ApolloClient({
  uri: <해당 uri>,
  cache: new InMemoryCache(),
});
```

### 2) index.js
만든 client를 `index.js`에 import하여 `ApolloProvider`로 제공함. 마치 리덕스의 store를 provide하는 것과 같음 

```javascript
import App from './component/App';
import client from './apollo';
import { ApolloProvider } from '@apollo/client/react';

...

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
```

---

## query
`@apollo/client`에 있는 hook을 사용하여 간편하게 쿼리를 날리고 loading, error, data를 가져올 수 있음.

이때 `gql`을 이용한 쿼리문은 component 바깥에 선언해주고 사용. 또한 쿼리문을 직접 작성하려면 data의 구조를 알고 있어야 할 것으로 보임. (api가 해결해줄 듯)

```javascript
import { useQuery, gql } from '@apollo/client';

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);

  if(loading) {
    return "loading...";
  }

  if(data && data.movies) {
    return data.movies.map((movie) => <h1 key={movie.id}>{movie.medium_cover_image}</h1>);
  }

  if(error) {
    console.log(error);
  }

  return <div>Home</div>
}
```
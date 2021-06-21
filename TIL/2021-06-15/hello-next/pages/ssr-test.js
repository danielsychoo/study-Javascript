import { Layout } from '../components';
import axios from 'axios';

const TESTAPI = 'https://jsonplaceholder.typicode.com/users';

// ? getServerSideProps에서 반환된 props가 들어옴
const SSRTest = ({ users }) => {
  console.log('users', users);
  
  const userList = users.map(user => {
    return <li key={ user.id }>{ user.username }</li>
  })

  return (
    <Layout>
      {userList}
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await axios.get(TESTAPI);

  // ? data 가 존재하지 않을 경우 리다이렉트
  if(!res.data) {
    return {
      redirect: {
        destination: '/not-found',
        permanent: false,
      }
    }
  }

  // ? data 가 존재할 경우 props로 넣어줌
  return {
    props: {
      users: res.data
    }
  }
}

export default SSRTest;
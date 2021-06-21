import { Layout } from '../components';

const Search = ({ url }) => {
  return (
    <Layout>
      검색 키워드는 { url.query.keyword }
    </Layout>
  )
}

export default Search;
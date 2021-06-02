import React from 'react';
import { useCustomQuery } from 'hooks';
// import { GET_MOVIES, GetMovies } from 'operations/queries/getMovies';
import {
  GET_SPECIFIC_MOVIE,
  GetSpecificMovie,
} from 'operations/queries/getSpecificMovie';
import Loading from 'components/Loading';

const Home = () => {
  // const { loading, data } = useCustomQuery<GetMovies>(GET_MOVIES);

  const { loading, data } = useCustomQuery<GetSpecificMovie>(
    GET_SPECIFIC_MOVIE,
    { variables: { id: 13143 } },
  );

  if (loading) return <Loading />;
  else if (data) console.log(data);

  return <div>Home Component</div>;
};

export default Home;

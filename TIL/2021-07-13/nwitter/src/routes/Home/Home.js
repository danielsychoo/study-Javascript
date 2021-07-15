import React from 'react';
import { NewNweet, NweetList } from 'components';

const Home = () => {
  return (
    <div>
      <NweetList />
      <NewNweet />
    </div>
  );
};

export default Home;

import React from 'react';
import { useQuery } from '@apollo/client';
import { getChatting } from '../utils/apollo/query';
import { newChat } from '../utils/apollo/subscription';

const Home = () => {
  let unsubscribe = null;
  const { loading, error, data, subscribeToMore } = useQuery(getChatting);

  if (loading) return '로딩중..................';
  if (error) console.log(error);

  if (!unsubscribe) {
    unsubscribe = subscribeToMore({
      // document에는 subscription을 할 쿼리문
      document: newChat,
      // updateQuery의 prev는 위에서 받은 data,
      // subscriptionData는 document에 적은 subscription을 실행한 결과값
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const { newChat } = subscriptionData.data;

        return {
          // ...prev, // ! ??? 구현 하고 한번만 다시 보자 이상한뎅
          chatting: [...prev.chatting, newChat],
        };
      },
    });
  }

  return (
    <div>
      {data.chatting.map((chat) => (
        <h3 key={chat.id}>
          {chat.writer}: {chat.description}
        </h3>
      ))}
    </div>
  );
};

export default Home;

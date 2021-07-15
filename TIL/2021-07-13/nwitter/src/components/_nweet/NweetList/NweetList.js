import React, { useState, useEffect } from 'react';
import { FIREBASE_FIRESTORE, FIREBASE_AUTH } from 'config/firebase';
import { Nweet } from 'components';

const NweetList = () => {
  const [nweets, setNweets] = useState([]);
  const currentUser = FIREBASE_AUTH.currentUser;

  const getNweetsSubscribe = () => {
    FIREBASE_FIRESTORE.collection('nweets').onSnapshot(snapshot => {
      const nweetArray = snapshot.docs.map(document => ({
        docId: document.id,
        ...document.data(),
      }));
      setNweets(nweetArray);
    });
  };

  useEffect(() => {
    getNweetsSubscribe();
  }, []);

  return (
    <div>
      <hr />
      {nweets.map(nweet => {
        return (
          <Nweet
            key={nweet.docId}
            nweetdata={nweet}
            isWriter={currentUser.uid === nweet.writerId}
          />
        );
      })}
    </div>
  );
};

export default NweetList;

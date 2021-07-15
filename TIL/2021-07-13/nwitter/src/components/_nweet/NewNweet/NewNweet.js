import React from 'react';
import { useInput } from 'hooks';
import { FIREBASE_FIRESTORE, FIREBASE_AUTH } from 'config/firebase';

const NewNweet = () => {
  const currentUser = FIREBASE_AUTH.currentUser;
  const { state, onChange, onReset } = useInput({
    newNweet: '',
  });
  const { newNweet } = state;

  const onSubmit = () => {
    FIREBASE_FIRESTORE.collection('nweets')
      .add({
        text: newNweet,
        createdAt: Date.now(),
        writerId: currentUser.uid,
      })
      .then(() => {
        onReset();
      })
      .catch(error => console.log(error.code));
  };

  return (
    <div>
      <hr />
      <input
        type="text"
        name="newNweet"
        placeholder="What's on your mind?"
        value={newNweet}
        onChange={onChange}
        maxLength={30}
      />
      <button onClick={onSubmit}>Nweet!</button>
    </div>
  );
};

export default NewNweet;

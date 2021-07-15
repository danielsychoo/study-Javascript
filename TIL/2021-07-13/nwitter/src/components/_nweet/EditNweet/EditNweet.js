import React from 'react';
import { useInput } from 'hooks';
import { FIREBASE_FIRESTORE } from 'config/firebase';

const EditNweet = ({ text, docId, handleToggle }) => {
  const { state, onChange, onReset } = useInput({
    editNweet: text,
  });
  const { editNweet } = state;

  const handleModify = () => {
    FIREBASE_FIRESTORE.doc(`nweets/${docId}`)
      .update({
        text: editNweet,
      })
      .catch(error => console.log(error));
    onReset();
    handleToggle();
  };

  return (
    <div>
      <input
        type="text"
        name="editNweet"
        value={editNweet}
        onChange={onChange}
      />
      <button onClick={handleModify}>Edit Complete!</button>
    </div>
  );
};

export default EditNweet;

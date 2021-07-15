import React from 'react';
import { FIREBASE_FIRESTORE } from 'config/firebase';
import { useToggle } from 'hooks';
import { EditNweet } from 'components';

const Nweet = ({ nweetdata: { text, docId }, isWriter }) => {
  const { isOn, handleToggle } = useToggle();
  const handleDelete = () => {
    const confirmPopup = window.confirm('Are you sure?');
    confirmPopup && FIREBASE_FIRESTORE.doc(`nweets/${docId}`).delete();
  };

  return (
    <div>
      <span>{text}</span>
      {isWriter && (
        <>
          <button onClick={handleToggle}>{isOn ? 'Cancel' : 'Modify'}</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
      {isOn && (
        <EditNweet text={text} docId={docId} handleToggle={handleToggle} />
      )}
    </div>
  );
};

export default Nweet;

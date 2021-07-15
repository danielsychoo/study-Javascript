import React, { useEffect } from 'react';
import { FIREBASE_AUTH } from 'config/firebase';
import { Switch, Route } from 'react-router-dom';
import { Navigation } from 'components';
import { Home, Auth, Profile, EditProfile } from 'routes';
import { useToggle } from 'hooks';

function App() {
  const { isOn, setIsOn } = useToggle();

  useEffect(() => {
    FIREBASE_AUTH.onAuthStateChanged(auth =>
      auth ? setIsOn(true) : setIsOn(false),
    );
  }, []);

  return (
    <div>
      {isOn && <Navigation />}
      <Switch>
        <Route exact path="/" render={() => (isOn ? <Home /> : <Auth />)} />
        <Route path="/myProfile" component={Profile} />
        <Route path="/editProfile" component={EditProfile} />
      </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import HomeScreen from './screens/HomeScreen';

const routes = () => {
  return (
    <Router>
      <Scene key='root'>
        <Scene key='Home' component={HomeScreen} title='Home' initial={true} />
      </Scene>
    </Router>
  );
}

export default routes;

import React from 'react';

// Components
import AppBar from './components/AppBar';
import HomeScreen from './components/HomeScreen';

const style = {
  fontFamily: 'Roboto, sans-serif'
};

const AppLayout = () => (
  <div style={style}>
    <AppBar />
    <HomeScreen />
  </div>
);

export default AppLayout;

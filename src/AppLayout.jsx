import React from 'react';

// Components
import AppBar from './components/AppBar';
import AppTabs from './components/AppTabs';

const style = {
  fontFamily: 'Roboto, sans-serif'
};

const AppLayout = () => (
  <div style={style}>
    <AppBar />
    <AppTabs />
  </div>
);

export default AppLayout;

import React from 'react';
import GlobalContext from './contexts';
import Router from './Router';

function App() {
  return (
    <GlobalContext>
      <Router/>
    </GlobalContext>
  )
}

export default App;

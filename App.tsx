import React from 'react';
import {Provider} from 'react-redux';
import Store from './Redux/store';
import Navigator from './src/Navigation/Navigator';

const App = (): React.ReactElement => {
  return (
    <Provider store={Store}>
      <Navigator />
    </Provider>
  );
};

export default App;

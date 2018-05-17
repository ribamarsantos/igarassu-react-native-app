
import React from 'react';
import { createRootNavigator } from './src/config/navigators/AppNavigator'

const App = () => {
  const Navigator = createRootNavigator()
  return <Navigator />
}

export default App;

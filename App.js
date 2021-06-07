/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import AppNavContainer from './src/navigations';
import GlobalProvider from './src/context/Provider';
import {Provider as PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <GlobalProvider>
      <PaperProvider>
        <AppNavContainer />
      </PaperProvider>
    </GlobalProvider>
  );
};

export default App;

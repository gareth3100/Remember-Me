// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hello World!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React from 'react'
import {Provider as PaperProvider} from 'react-native-paper'
import AppNavigator from './src/navigation/Index'
import {Provider as NoteProvider} from './src/Context/NoteContext'

export default function App() {
  return (
    <NoteProvider>
      <AppNavigator/>
    </NoteProvider>
  )
}
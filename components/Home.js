import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Hello from Home!</Text>
        <Button
            title="Go To Database"
            onPress={
                () => navigation.navigate( 'Database', { information: "Gareth"} ) //navigation.navigate lets you move to different pages
            }
        />
      <StatusBar style="auto" />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
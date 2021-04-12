import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function Home({ navigation }) { //apparently have to pass in navigation as a parameter to the function to make it work
  return (
    <View style={styles.container}>
      <Text>Hello from Home!</Text>
      <View style={styles.space} />
        <Button
            title="Go To Database"
            onPress={
                () => navigation.navigate( 'Database', { information: "Gareth"} ) //navigation.navigate lets you move to different pages, this is also how you pass in info.
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
  space: {
    width: 20,
    height: 20,
  },
});
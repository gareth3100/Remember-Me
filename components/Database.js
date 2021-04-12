import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Database({ navigation }) { //apparently have to pass in navigation as a parameter to the function to make it work

    const information = navigation.getParam( 'information', 'no information passed');

    return (
        <View style={styles.container}>
        <Text>Hello from Database!</Text>
        <Text> You passed in: { information }</Text>
        <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
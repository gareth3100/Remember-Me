import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function Database({ navigation }) { //apparently have to pass in navigation as a parameter to the function to make it work

    const information = navigation.getParam( 'information', 'no information passed'); //checks if anything passed in arguments

    return (
        <View style={styles.container}>
        <Text>Hello from Database!</Text>
        <Text> You passed in: { information }</Text>
        <View style={styles.space} />
        <Button
            
            title="Go back to Home"
            onPress={
                () => navigation.navigate( 'Home' ) //navigation.navigate lets you move to different pages
            }
        />
        <StatusBar style="auto" />
        </View>

        
        
    );
}

export default Database;

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
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Home from './components/Home'
import Database from './components/Database'

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const RootStack = createStackNavigator( { //stack navigator allows you to navigate between pages. if you navigate to a page, pushes page onto stack. If you want to go back, it pops that page from the stack.
  Home: Home, //The "Home" before the colon is the title of the page on the top left. The "Home" after the colon is the "Home" being imported from Home.js
  Database: Database,
} );

const Container = createAppContainer(RootStack); // you need this and the "export" in order to make pages work. Not exactly sure why yet.

export default Container; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

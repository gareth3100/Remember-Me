/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { firebase } from './src/firebase/config'
firebase.firestore().settings({ experimentalForceLongPolling: true }); //add this..
import AppNavContainer from './src/navigations';
import GlobalProvider from './src/context/Provider';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
//import {decode, encode} from 'base-64'
//if (!global.btoa) {  global.btoa = encode }
//if (!global.atob) { global.atob = decode }
import { LOGIN, REGISTER } from './src/constants/routeNames';


const Stack = createStackNavigator();

export default function App() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  const [userLogged, setUserLogged] = useState(false);
  

  useEffect(() => {
    const usersRef = firebase.firestore().collection('users');
    const authListener = firebase.auth().onAuthStateChanged(user => {
      setUserLogged(user ? true : false);
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            setLoading(false)
            setUser(userData)
          })
          .catch((error) => {
            setLoading(false)
          });
      } else {
        setLoading(false)
      }
    });
    return authListener;
  }, []);

  if (loading) {
    return (
      <></>
    )
  }
  //if user is authenticated, go to home screen other wise go to login/registration
  return (
    <GlobalProvider>
      <AppNavContainer/>
    </GlobalProvider>
  );
}


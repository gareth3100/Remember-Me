import React, {useContext, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import logoutUser from '../../context/actions/auth/logoutUser';
import {GlobalContext} from '../../context/Provider';
import { firebase } from '../../firebase/config';

const Logout = () => {
  const {authDispatch} = useContext(GlobalContext);

  useEffect(() => {
    firebase.auth().signOut().then(() => {
        logoutUser()(authDispatch);
    // Sign-out successful.
    }).catch((error) => {
    // An error happened.
    });  
    
  }, []);

  return <ActivityIndicator />;
};

export default Logout;
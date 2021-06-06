import React, { useEffect, useContext } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator  from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';
import  { GlobalContext } from '../context/Provider';
import SplashScreen from 'react-native-splash-screen';
import {navigationRef} from './SideMenu/RootNavigator';

const AppNavContainer = () => {
    const { 
        authState:{isLoggedIn}, 
    } = useContext(GlobalContext);

    React.useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (
        <NavigationContainer ref={navigationRef}>
            { isLoggedIn ? <DrawerNavigator/> : <AuthNavigator/> }
        </NavigationContainer>
    );
};

export default AppNavContainer; 
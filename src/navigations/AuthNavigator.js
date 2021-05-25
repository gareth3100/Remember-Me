import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { LOGIN, REGISTER } from '../constants/routeNames';
import Login from '../screens/Login';
import Register from '../screens/Register';

const AuthNavigator = ()=> {
    const AuthStack= createStackNavigator();
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name = {LOGIN} component = {Login} />
            <AuthStack.Screen name = {REGISTERs} component = {Register} /> 
        </AuthStack.Navigator>
    );
};

//screens>>> Home>>> Drawer
//screens>>> Auth>>>

export default AuthNavigator;
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { CONTACT_DETAIL, CONTACT_LIST, CREATE_CONTACT, SETTINGS } from '../constants/routeNames';
import Contacts from '../screens/Contacts';
import CreateContact from '../screens/CreateContacts';
import ContactDetail from '../screens/ContactDetail';
import Settings from '../screens/Settings';
import {View, Text, ScrollView} from 'react-native';

const HomeNavigator = () => {
    const HomeStack = createStackNavigator();
    return (
        <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
            <HomeStack.Screen 
                name = {CONTACT_LIST} 
                component = {Contacts}
                options={{headerLeft: () => <Text>MENU</Text>}}
            />
            <HomeStack.Screen name = {CONTACT_DETAIL} component = {ContactDetail}/>   
            <HomeStack.Screen name = {CREATE_CONTACT} component = {CreateContact}/>   
            <HomeStack.Screen name = {SETTINGS} component = {Settings}/>     
        </HomeStack.Navigator>
    );
};

//screens>>> Home>>> Drawer
//screens>>> Auth>>>

export default HomeNavigator;
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CONTACT_DETAIL, CONTACT_LIST, CREATE_CONTACT, SETTINGS, FACE_PAGE } from '../constants/routeNames';
import Contacts from '../screens/Contacts';
import ContactDetail from '../screens/ContactDetail';
import CreateContact from '../screens/CreateContact';
import Settings from '../screens/Settings';
import Logout from '../screens/Logout';
import {View, Text, ScrollView} from 'react-native';
import FacialRecognition from '../screens/FacialRecognition';

const HomeNavigator = () => {
    const HomeStack = createStackNavigator();
    return (
        <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
           <HomeStack.Screen 
                name = {CONTACT_LIST} 
                component = {Contacts}
                options={{headerLeft: () => <Text>MENU</Text>}}
            />
            <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetail}/>
            <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact}/>
            <HomeStack.Screen name={SETTINGS} component={Settings}/>
            <HomeStack.Screen name={FACE_PAGE} component={FacialRecognition}/>
        </HomeStack.Navigator>
    );
};

export default HomeNavigator;
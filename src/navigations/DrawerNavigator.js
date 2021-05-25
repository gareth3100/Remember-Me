import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import { HOME_NAVIGATOR } from '../constants/routeNames';
import { SafeAreaView, View } from 'react-native';
import Container from '../components/common/Container';
import SideMenu from './SideMenu';

const getDrawerContent = (navigation) =>{
    return <SideMenu navigation = {navigation} />;
};

const DrawerNavigator = () => {
    const Drawer = createDrawerNavigator();
    return (
        //changes the left menu method of movement
        <Drawer.Navigator 
            drawerType = "slide" 
            drawerContent={({navigation})=>getDrawerContent(navigation)}>
            <Drawer.Screen name = {HOME_NAVIGATOR} component = {HomeNavigator}/>   
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
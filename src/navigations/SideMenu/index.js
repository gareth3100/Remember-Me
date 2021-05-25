import { loadOptions } from '@babel/core';
import React from 'react';
import {Image, SafeAreaView, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Container from '../../components/common/Container';
import { SETTINGS } from '../../constants/routeNames';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

//add image logo
const SideMenu = ({navigation}) => {
    const menuItems = [
        {
            icon: <Icon size={21} name="settings"></Icon>, 
            name: 'Settings',
            onPress: ()=> {
                navigation.navigate(SETTINGS);
            },
        },
        {
            icon: <MaterialIcon size={21} name="logout"></MaterialIcon>, 
            name: 'Logout',
            onPress:( )=> {},
        }
    ];

    return(
        <SafeAreaView>
            <Container>
                <Image
                    height={100}
                    width={100}
                    source ={require('../../assets/images/transparent-brain-24.png')}
                    style = {styles.logoImage}
                />

                <View style={{paddingHorizontal: 70, paddingVertical: 20}}>
                    {menuItems.map(({name, icon, onPress}) => (
                        <TouchableOpacity onPress={onPress} key={name} style ={styles.item}> 
                            {icon}
                            <Text style={styles.itemText}>{name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </Container>
        </SafeAreaView>
    );
};

export default SideMenu;
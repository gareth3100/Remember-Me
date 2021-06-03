import React from 'react';
import {
  Image,
  Alert,
  TouchableOpacity,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import Container from '../../components/common/Container';
import {SETTINGS} from '../../constants/routeNames';
import logoutUser from '../../context/actions/auth/logoutUser';
import styles from './styles';
import Icon from '../../components/common/Icon';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

//add image logo
const SideMenu = ({navigation, authDispatch}) => {
    const handleLogout = () => {
        navigation.toggleDrawer();
        Alert.alert('Logout!', 'Are you sure you want to logout?', [
            {
                text: 'Cancel',
                onPress: () => {},
            },

            {
                text: 'OK',
                onPress: () => {
                    logoutUser()(authDispatch);
                },
            },
        ]);
    };

    const menuItems = [
        {
            icon: <Icon type="fontisto" size={scale(17)} name="player-settings" />,
            name: 'Settings',
            onPress: () => {
                navigation.navigate(SETTINGS);
            },
        },
        {
            icon: <Icon type="material" size={scale(17)} name="logout" />,
            name: 'Logout',
            onPress: handleLogout,
        },
    ];

    return (
        <SafeAreaView>
            <Container>
                <Image
                    height={verticalScale(100)}
                    width={scale(100)}
                    source ={require('../../assets/images/transparent-brain-24.png')}
                    style = {styles.logoImage}
                />

                <View style={{paddingHorizontal: moderateScale(70), paddingVertical: moderateScale(20)}}>
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
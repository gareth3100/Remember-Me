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
            icon: <Icon type="fontisto" size={17} name="player-settings" />,
            name: 'Settings',
            onPress: () => {
                navigation.navigate(SETTINGS);
            },
        },
        {
            icon: <Icon type="material" size={17} name="logout" />,
            name: 'Logout',
            onPress: handleLogout,
        },
    ];

    return (
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
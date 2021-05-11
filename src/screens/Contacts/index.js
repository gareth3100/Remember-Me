import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import { View, TouchableOpacity} from 'react-native';

import Container from '../../components/common/Container/index'

const Contacts = () => {
    const {setOptions, toggleDrawer} = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <ContactsComponent  
            modalVisible = {modalVisible}
            setModalVisible = {setModalVisible}
        />
    );
};

export default Contacts;
import React from 'react';
import { Text, View } from 'react-native';
import AppModal from '../common/AppModal/Index';


const ContactsComponent = ({modalVisible, setModalVisible}) => {
    return (
        <View>
            <AppModal 
                modalVisible = {modalVisible}
                setModalVisible = {setModalVisible}
            /> 
        </View>
    );
};

export default ContactsComponent;
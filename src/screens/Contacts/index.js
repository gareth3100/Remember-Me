import { useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useContext, useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ContactsComponent from '../../components/ContactComponent';
import { FAB, List} from 'react-native-paper';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {GlobalContext} from '../../context/Provider';
import getContacts from '../../context/contacts/getContacts';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const Contacts = ({navigation}) => {
    const {navigate} = useNavigation();
    //menu side button
    const {setOptions, toggleDrawer} = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [sortBy, setSortBy] = React.useState(null);

    const {
        contactsDispatch,
        contactsState: {
            getContacts:{data, loading}
        },
    } = useContext(GlobalContext);

    const getSettings = async () => {
        const sortPref = await AsyncStorage.getItem('sortBy');
        if(sortPref){
            setSortBy(sortPref)
        }
    };

    useEffect(() => {
        getContacts()(contactsDispatch);
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            getSettings();
            return () => {
            }
    }, []));

    // useEffect(() => {
    //     getSettings();
    // }, []);

    React.useEffect(() => {
        setOptions({
            headerLeft:()=> (
            <TouchableOpacity 
                onPress={() => {
                    toggleDrawer(); 
                }}>
                <MaterialIcon 
                    style={{padding:10}} 
                    size={30} name="menu"
                ></MaterialIcon>
            </TouchableOpacity>
        ),
        });
    }, []);

    return(
        <>
            <ContactsComponent 
                modalVisible = {modalVisible} 
                setModalVisible = {setModalVisible}
                data = {data}
                loading = {loading}
                sortBy={sortBy}
            />
        </>
    );
};

export default Contacts;

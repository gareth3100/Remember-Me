import { useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useContext, useState, useEffect, useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ContactsComponent from '../../components/ContactComponent';
import { FAB, List} from 'react-native-paper';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {GlobalContext} from '../../context/Provider';
import getContacts from '../../context/contacts/getContacts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CONTACT_DETAIL } from '../../constants/routeNames';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

// import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const Contacts = ({navigation, route}) => {
    
    const {navigate} = useNavigation();
    //menu side button
    const {setOptions, toggleDrawer} = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [sortBy, setSortBy] = React.useState(null);
    const contactsRef = useRef([]);

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

    //Used to determine latest created contact and pull info quicker
    useEffect(() => {
        const prev = contactsRef.current;
        contactsRef.current = data;
        const newList = contactsRef.current;

        //1 Newly added item
        if(newList.length-prev.length === 1) {
            const newContacts = newList.find(
                (item) => !prev.map((i)=>i.id).includes(item.id)
            );
            navigate(CONTACT_DETAIL, {item: newContacts})
        }
    },[data.length]);

    //Used to open contact
    useEffect(() => {
        const prev = contactsRef.current;
        contactsRef.current = data;
        const newList = contactsRef.current;

        if(route.params != undefined){
            console.log(route.params.names.length)
            if(route.params.names.length > 0){
                const foundProfile = newList.find(
                    (item) => !prev.map((i)=>i.id).includes(route.params.names[0])
                );
                navigate(CONTACT_DETAIL, {item: foundProfile})
            }
        }
    },[data.length]);

    React.useEffect(() => {
        setOptions({
            headerLeft:()=> (
            <TouchableOpacity 
                onPress={() => {
                    toggleDrawer(); 
                }}>
                <MaterialIcon 
                    style={{padding: moderateScale(10)}} 
                    size={scale(30)} name="menu"
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

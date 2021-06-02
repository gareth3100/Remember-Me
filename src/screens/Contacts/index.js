import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from '../../components/common/Icon';
import ContactComponent from '../../components/ContactComponent';
import {CONTACT_DETAIL} from '../../constants/routeNames';
import getContacts from '../../context/actions/contacts/getContacts';
import {GlobalContext} from '../../context/Provider';
import {navigate} from '../../navigations/SideMenu/RootNavigator';

// import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const Contacts = () => {
    const {navigate} = useNavigation();
    //menu side button
    const [sortBy, setSortBy] = React.useState(null);
    const {setOptions, toggleDrawer} = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const contactsRef = useRef([]);

    const {
        contactsDispatch,
        contactsState: {
            getContacts:{data, loading, error}
        },
    } = useContext(GlobalContext);

    useEffect(() => {
        getContacts()(contactsDispatch);
    }, []);

    useEffect(() => {
        const prev = contactsRef.current;

        contactsRef.current = data;
        
        const newList = contactsRef.current;
        //console.log("This is: newList.length - prev.length", newList.length - prev.length)
        //if (newList.length - prev.length === 1) {
            const newContact = newList.find(
                (item) => !prev.map((i) => i.userID).includes(item.userID),
            );
            navigate(CONTACT_DETAIL, {item: newContact});
        //}
    }, [data.length]);


    React.useEffect(() => {
        setOptions({
            headerLeft: () => (
                <TouchableOpacity
                onPress={() => {
                    toggleDrawer();
                }}>
                <Icon type="material" style={{padding: 10}} size={25} name="menu" />
                </TouchableOpacity>
            ),
        });
    }, []);

    return (
        <ContactComponent
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            data={data}
            loading={loading}
            sortBy={sortBy}
        />
    );
};



export default Contacts;

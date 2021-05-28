import { useNavigation} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ContactsComponent from '../../components/ContactComponent';
import { FAB, List} from 'react-native-paper';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {GlobalContext} from '../../context/Provider';

// import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const Contacts = () => {
    const {navigate} = useNavigation();
    //menu side button
    const {setOptions, toggleDrawer} = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    const {contactsState:{getContacts:{data, loading}},} = useContext(GlobalContext)
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
            />

            {/* <View>
                <FAB
                    style = {styles.fab}
                    small
                    icon = 'plus'
                    label = 'Add a new contact'
                    onPress = {() => {
                        navigate(CREATE_CONTACT);
                    }}
                />
            </View> */}
        </>
    );
};

// const styles = StyleSheet.create({
//     fab: {
//         backgroundColor: '#87cefa',
//         // width: 55,
//         // height: 55,
//         position: 'absolute',
//         margin: 20,
//         bottom: -550,
//         right: 0,
//     },
// })

export default Contacts;

import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity} from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'
import AppNavigator from '../../navigation/Index'
import {Provider as NoteProvider} from '../../Context/NoteContext'
import '@firebase/auth';

export default function HomeScreen({navigation}) {
    
    const logOut = () => {
        firebase.auth().signOut().then(function() {
            console.log("Successfully signed out.")
            navigation.navigate('Login') } )
            .catch((error) => {
                alert(error)
            });
    }

    return (
        <NoteProvider>
            <TouchableOpacity
                    style={styles.button}
                    onPress={() => logOut()}>
                    <Text style={styles.buttonTitle}>Log out</Text>
            </TouchableOpacity>
            <AppNavigator/>     
        </NoteProvider> 
    )
}
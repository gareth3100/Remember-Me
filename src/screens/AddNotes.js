import React, {useState} from 'react'
import {StyleSheet, View} from 'react-native'
import {Text, TextInput, FAB, IconButton} from 'react-native-paper'
import Header from '../component/Header';


//  this file adds new notes for the application

function AddNotes({navigation}) {
    
    //  changes the state of the Date, Title, and Description
    //  look at React Hooks on the React page
    const [noteTitle, setNoteTitle] = useState('');
    const [noteDate, setDate] = useState('');
    const [noteDescription, setNoteDescription] = useState('');

    function onSaveNote() {
        navigation.state.params.addNotes({noteTitle, noteDate, noteDescription});
        navigation.goBack();
    }
    
            //  creates an entry for the Title, Date, and Description
            //  FAB is a button that represents the primary action in the app
            //  BTW can't write comments once in the view tag
    return (
        <>
        <Header titleText = 'Add a New Memory' />
        <IconButton icon = 'close' size = {25} color = 'white' onPress = {() => navigation.goBack()} 
            style = {styles.iconButton}
        />

            

            <View style = {styles.container}>
                <TextInput 
                    label = "Add Note Title Here"
                    mode = 'outlined'
                    onChangeText = {setNoteTitle}
                    value = {noteTitle}
                    style = {styles.title}
                />
                <TextInput
                    label = "Add Note Date Here"
                    mode = 'outlined'
                    onChangeText = {setDate}
                    value = {noteDate}
                    style = {styles.title}
                />
                <TextInput
                    label = "Add Note Description"
                    value = {noteDescription}
                    onChangeText = {setNoteDescription}
                    mode = "flat"
                    multiline = {true}
                    style = {styles.text}
                    scrollEnabled = {true}
                    returnKeyLabel = 'done'
                    blurOnSubmit = {true}
                />
                <FAB
                    style = {styles.fab}
                    small icon = "check"
                    disabled = {(noteTitle == '' && noteDescription == '')}
                    onPress = {() => onSaveNote()}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    iconButton: {
        backgroundColor: '#ff0000',
        position: 'absolute',
        right: 0,
        top: 0,
        margin: 10
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    title: {
        fontSize: 24,
        marginBottom: 16
    },
    text: {
        height: 300,
        fontSize: 16
    },
    fab: {
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 0
    }
})

export default AddNotes
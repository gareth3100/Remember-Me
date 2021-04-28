import React, {useState, useContext} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {Text, FAB, List} from 'react-native-paper';
import Header from '../component/Header';
import {Context as NoteContext} from '../Context/NoteContext';

//  This file displays all of the notes in the front-end of the app
//  Starting on LINE 60 and below, those are CSS styling.

function ViewNotes({navigation}) {
    // switches states between notes. If there are no notes, the
    // line, "You don't have any memory notes" will appear. Otherwise,
    // it'll list all of the notes.
    const [notes, setNotes] = useState([]);

    // useContext is helpful to pass props to multiple levels of child
    // components from a parent component and sharing state across the 
    // app component tree.
    const {state, addnote, deletenote} = useContext(NoteContext)

    const addNotes = note => {
        note.id = state.length + 1;
        addnote(note)
        // setNotes([...notes, note]);
    }
    return (
        <>
        <Header titleText = 'My Memory Journal' />

        // if there is no notes, display "You don't have any memory notes."
        // otherwise, display all of the notes onto the screen
        // if we press onto the note, it deletes the note (needs to fix this later)
        // FAB is a button that transitions into the AddNotes screen

        <View style = {styles.container}>
            {state.length === 0 ? ( 
                <View style = {styles.titleContainer}>
                    <Text style = {styles.title}>You don't have any memory notes.</Text>
                </View>
            ) : ( 
                    <FlatList 
                        data = {state}
                        renderItem = {({item}) => (
                            <List.Item 
                                title = {item.noteTitle}
                                description = {item.noteDescription}
                                descriptionNumberOfLines = {1}
                                titleStyle = {styles.listTitle}
                                onPress = {() => deletenote(item.id)}
                            />
                        )}
                        keyExtractor = {item => item.id.toString()}
                    />
                )}
            <FAB
                style = {styles.fab}
                small
                icon = 'plus'
                label = 'Add a new Note'
                onPress = {() => navigation.navigate('AddNotes', {addNotes})}
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
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    title: {
        fontSize: 20
    },
    fab: {
        backgroundColor: '#219653',
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 10
    },
    listTitle: {
        fontSize: 20
    }
})

export default ViewNotes;
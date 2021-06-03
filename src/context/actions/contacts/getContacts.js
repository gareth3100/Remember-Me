import {
    GET_CONTACTS_LOADING,
    GET_CONTACTS_FAIL,
    GET_CONTACTS_SUCCESS,
} from '../../constants/actionTypes';
import { firebase } from '../../firebase/config';

//Not finished, but this is what we will use to get the contact info from firebase
export default () => (dispatch)  => {
    dispatch({
        type:GET_CONTACTS_LOADING
    });

    //userID is the ID number of the user that is current logged into the app
    const userID = firebase.auth().currentUser.uid;

    //contactRef is a reference to the contacts table
    const contactRef = firebase.firestore().collection('contacts');

    //Here find all the contacts of the currently logged in user
    //Currently, the contacts are being ordered by newest contact on top
    contactRef
        .where("userID", "==", userID)
        .orderBy('createdAt', 'desc')
        .onSnapshot(
            querySnapshot => {
                const contacts = []
                querySnapshot.forEach(doc => {
                    const entity = doc.data()
                    entity.id = doc.id
                    contacts.push(entity)
                });
                dispatch({
                    type: GET_CONTACTS_SUCCESS,
                    payload: contacts,
                });
            },
                error => {
                    dispatch({
                        type: GET_CONTACTS_FAIL,
                        payload: error.response ? error.response.data : alert(error)
                    });
                }
            )
};
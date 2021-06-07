import {
    DELETE_CONTACT_LOADING,
    DELETE_CONTACT_FAIL,
    DELETE_CONTACT_SUCCESS,
} from '../../../constants/actionTypes';
import { firebase } from '../../../firebase/config';

//Not finished, but this is what we will use to DELETE the contact info from firebase
export default (id) => (dispatch)  => (onSuccess) => {
    dispatch({
        type:DELETE_CONTACT_LOADING
    });

    console.log('This is id')
    console.log(id);

    //userID is the ID number of the user that is current logged into the app
    const userID = firebase.auth().currentUser.uid;

    //contactRef is a reference to the contacts table
    const contactRef = firebase.firestore().collection('contacts');

    //Here find all the contacts of the currently logged in user
    //Currently, the contacts are being ordered by newest contact on top
    contactRef
        .where("userID", "==", userID)
        .onSnapshot(
            querySnapshot => {
                querySnapshot.forEach(doc => {
                    if(doc.id == id){
                        doc.ref.delete()
                    }
                });
                dispatch({
                    type: DELETE_CONTACT_SUCCESS,
                    payload: id,
                });

                onSuccess();
            },
                error => {
                    dispatch({
                        type: DELETE_CONTACT_FAIL,
                        payload: error.response ? error.response.data : alert(error)
                    });
                }
            )
};
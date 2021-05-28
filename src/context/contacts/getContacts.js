import {
    GET_CONTACTS_LOADING,
    GET_CONTACTS_FAIL,
    GET_CONTACTS_SUCCESS,
  } from '../../../constants/actionTypes';
  import { firebase } from '../../firebase/config';

//Not finished, but this is what we will use to get the contact info from firebase
export default () => (dispatch)  => {
    dispatchEvent({
        type:GET_CONTACTS_LOADING
    });
    // firebase
    //     .firestore()
    //     .collection('contacts')
    //     .where("")

    // firebase
    // .auth()
    // .then((response) => {
    //     const uid = response.user.uid
    //     const usersRef = firebase.firestore().collection('users')
    //     usersRef
    //         .doc(uid)
    //         .get()
    //         .then(firestoreDocument => {
    //             if (!firestoreDocument.exists) {
    //               alert("User does not exist anymore.")
    //               return;
    //             }
    //             const user = firestoreDocument.data()
    //             dispatch({
    //               type: LOGIN_SUCCESS,
    //               payload: response.data,
    //             });
    //         })
    //         .catch(error => {
    //           dispatch({
    //             type: LOGIN_FAIL,
    //             payload: error.response
    //           });
    //           alert(error)
    //         });
    // })
    // .catch(error => {
    //   dispatch({
    //     type: LOGIN_FAIL,
    //     payload: error.response
    //   });
    //   alert(error)
    // })
};
import {
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from '../../../constants/actionTypes';
import { firebase } from '../../../firebase/config';

export default ({password, email: email}) => (dispatch) => {
  dispatch({
    type: LOGIN_LOADING,
  });
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((response) => {
        const uid = response.user.uid
        const usersRef = firebase.firestore().collection('users')
        usersRef
            .doc(uid)
            .get()
            .then(firestoreDocument => {
                if (!firestoreDocument.exists) {
                  alert("User does not exist anymore.")
                  return;
                }
                const user = firestoreDocument.data()
                dispatch({
                  type: LOGIN_SUCCESS,
                  payload: response.data,
                });
            })
            .catch(error => {
              dispatch({
                type: LOGIN_FAIL,
                payload: error.response
              });
              alert(error)
            });
    })
    .catch(error => {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response
      });
      alert(error)
    })
}
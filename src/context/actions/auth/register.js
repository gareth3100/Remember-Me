//Downloaded yarn add @react-native-firebase/app

import { REGISTER_LOADING, REGISTER_SUCCESS } from '../../../constants/actionTypes';
import { firebase } from '../../../firebase/config'

export default ({
    email,
    password,
    username,
    firstName,
    lastName,
}) => dispatch => {
    dispatch({
        type:REGISTER_LOADING
    });
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((response) => {
            const uid = response.user.uid
            const data = {
                id: uid,
                email,
                firstName,
                lastName,
            };
            console.log('This is data')
            console.log(data)
            const usersRef = firebase.firestore().collection('users')
            usersRef
                .doc(uid)
                .set(data)
                .then(() => {
                    dispatch({
                        type: REGISTER_SUCCESS,
                        payload: res.data
                    })
                })
                .catch((error) => {
                    alert(error)
                });
        })
        .catch((error) => {
            dispatch({
                type: REGISTER_FAIL,
                payload: err.response? err.response.data : alert(error)
            });
        });
}
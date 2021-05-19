//Downloaded yarn add @react-native-firebase/app

import { 
    REGISTER_FAIL, 
    REGISTER_LOADING, 
    REGISTER_SUCCESS, 
    CLEAR_AUTH_STATE 
} from '../../../constants/actionTypes';
import { firebase } from '../../../firebase/config'


export const clearAuthState = () => (dispatch) => {
  dispatch({
    type: CLEAR_AUTH_STATE,
  });
};

export default ({
    email,
    password,
    firstName,
    lastName,
}) => dispatch => (onSuccess) => {
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
                .then((res) => {
                    dispatch({
                        type: REGISTER_SUCCESS,
                        payload: res.data
                    })
                    onSuccess(res.data);
                })

                
                .catch((error) => {
                    alert(error)
                });
        })
        .catch((error) => {
            dispatch({
                type: REGISTER_FAIL,
                payload: error.response? error.response.data : alert(error)
            });
        });
}
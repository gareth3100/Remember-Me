//Downloaded yarn add @react-native-firebase/app

import { 
    REGISTER_LOADING, 
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    CLEAR_AUTH_STATE,
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
    firstName: first_name,
    lastName: last_name,
}) => (dispatch) => (onSuccess) => {
  dispatch({
    type: REGISTER_LOADING,
  });
  
firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
        const uid = response.user.uid
        const data = {
            id: uid,
            email,
            first_name,
            last_name,
        };
        console.log('This is the data:\n', data)
        const usersRef = firebase.firestore().collection('users')
        usersRef
            .doc(uid)
            .set(data)
            .then((res) => {
                dispatch({
                    type: REGISTER_SUCCESS,
                    payload: data //DON't NEED TO ADD RES. using res.data was my error.
                })
                //DON't NEED TO ADD RES. res.data was my error.
                onSuccess(data);

            })
            .catch((error) => {
                alert(error)
            });
            
    })
    .catch((error) => {
        dispatch({
            type: REGISTER_FAIL,
            payload: error.response ? error.response.data : alert(error)
        });
    });
}
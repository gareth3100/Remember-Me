import {
  EDIT_CONTACT_FAIL,
  EDIT_CONTACT_LOADING,
  EDIT_CONTACT_SUCCESS,
} from '../../../constants/actionTypes';
import { firebase } from '../../../firebase/config';

export default (form, id) => (dispatch) => (onSuccess) => {
  const requestPayload = {
    country_code: form.phoneCode || '',
    first_name: form.firstName || '',
    last_name: form.lastName || '',
    phone_number: form.phoneNumber || '',
    contact_picture: form.contactPicture || null,
    is_favorite: form.isFavorite || false,
  };

    console.log('requestPayload :>> ', requestPayload);
    dispatch({
        type: EDIT_CONTACT_LOADING,
    });

    firebase
        .firestore()
        .collection('contacts')
        .update({
            //change this later. just filler for now
            age: 31,
        })
        .then(() => {
            dispatch({
                type: EDIT_CONTACT_SUCCESS,
                payload: res.data,
            });
             onSuccess(res.data);
            console.log('User updated!');
        })
        .catch((err) => {
        console.log('err', err.response);
        dispatch({
            type: EDIT_CONTACT_FAIL,
            payload: err.response
            ? err.response.data
            : {error: 'Something went wrong, try again'},
        });
    });
};
import {
  DELETE_CONTACT_FAIL,
  DELETE_CONTACT_LOADING,
  DELETE_CONTACT_SUCCESS,
} from '../../../constants/actionTypes';
import { firebase } from '../../../firebase/config';

export default (id) => (dispatch) => (onSuccess) => {
  console.log('id', id);
  dispatch({
    type: DELETE_CONTACT_LOADING,
  });
  firebase
    .firestore()
    .collection('contacts')
    //.doc('ABC')
    .delete()
    .then(() => {
        dispatch({
            type: DELETE_CONTACT_SUCCESS,
            payload: id,
        });
        onSuccess();
        console.log('Contact deleted!');
    })
    .catch((err) => {
      dispatch({
        type: DELETE_CONTACT_FAIL,
        payload: err.response
          ? err.response.data
          : {error: 'Something went wrong, try again'},
      });
    });

}
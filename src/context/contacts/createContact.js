import {
    CREATE_CONTACT_LOADING,
    CREATE_CONTACT_SUCCESS,
    CREATE_CONTACT_FAIL,
} from '../../constants/actionTypes';
import { firebase } from '../../firebase/config';

export default (form) => (dispatch) => (onSuccess) => {

    //Pull all of the information from the parent class, ie, index.js in the CreateContact folder
    const data = {
        firstName: form.firstName || '',
        lastName: form.lastName || '',
        address: form.address || '',
        birthDate: form.birthDate || '',
        countryCode: form.countryCode || '',
        phoneCode: form.phoneCode || '',
        phoneNumber: form.phoneNumber || '',
        relationship: form.relationship || '',
        memory: form.memory || '',
    };

    dispatch({
        type: CREATE_CONTACT_LOADING,
    });


    //Connects to firebase. Makes a colleciton called 'contacts' if it doesnt already exist. Adds the data from above using .add()
    firebase
        .firestore()
        .collection('contacts')
        .add(data)
        .then((res) => {  
            console.log('res.data')
            dispatch({
                type: CREATE_CONTACT_SUCCESS,
                payload: data
            })
            onSuccess();
        })
        .catch((error) => {
            console.log('here')
            dispatch({
                type: CREATE_CONTACT_FAIL,
                payload: error.response ? error.response.data : alert(error)
            });
    });
};
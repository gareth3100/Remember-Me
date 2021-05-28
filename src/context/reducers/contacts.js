import { 
    CREATE_CONTACT_LOADING, 
    CREATE_CONTACT_SUCCESS, 
    CREATE_CONTACT_FAIL, } from "../../constants/actionTypes";

const contacts = (state, { type,payload } ) => {
    switch(type){
        case CREATE_CONTACT_LOADING:
            return {
                ...state,
                createContact:{
                    ...state.createContact,
                    loading: true,
                    error: null,
                },
            };
        
        case CREATE_CONTACT_SUCCESS:
            return {
                ...state,
                createContact:{
                    ...state.createContact,
                    loading: false,
                    error: null,
                    data: payload,
                },
            };

        case CREATE_CONTACT_FAIL:
            return {
                ...state,
                createContact:{
                    ...state.createContact,
                    loading: false,
                    error: payload,
                },
            };

        default:
            return state;
    }
};

export default contacts;
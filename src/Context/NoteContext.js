import createDataContext from './createDataContext'
export const ADD_NOTE = 'ADD_NOTE'
export const DELETE_NOTE = 'DELETE_NOTE'

// need to look at the YouTube video

const initialState = [];

const noteReducer = (state = initialState, action) => {
    switch(action.type) {
        // adds a note onto the state so the app "updates"
        // believe it adds into the initialState
        case ADD_NOTE:
            return [...state, action.payload]

        // deletes a note based on id and updates the state 
        case DELETE_NOTE:
        // filters out the list of notes that were not deleted
            return state.filter(note => note.id !== action.payload)
        
        // do nothing if nothing 
        default:
            return state
    }
}

// dispatch is a way to trigger a state change
// looked at React Redux documentation
// trigger an add action
const addnote = dispatch => async(note) => {
    dispatch ({type: ADD_NOTE, payload: note})
}

// looked at React Redux documentation
// trigger a delete action
const deletenote = dispatch => async(id) => {
    dispatch({type: DELETE_NOTE, payload: id})
}

// creates a CONTEXT object. The purpose is to pass data
// through the component tree w/o passing properties down
// manually at each level
export const {Provider, Context} = createDataContext(
    noteReducer, {addnote, deletenote}, []
)
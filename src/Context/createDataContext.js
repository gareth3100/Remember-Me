import React, {useReducer} from 'react'

export default (reducer, actions, defaultValue) => {
    // need to look at the YouTube video

    // creates a CONTEXT object. The purpose is to pass data
    // through the component tree w/o passing properties down
    // manually at each level
    
    const Context = React.createContext()

    const Provider = ({children}) => {
        const [state, dispatch] = useReducer(reducer, defaultValue)
        const boundActions = {}

        for (let key in actions) {
            boundActions[key] = actions[key](dispatch)
        }

        return (
            <Context.Provider value = {{state, ...boundActions}}>
                {children}
            </Context.Provider>
        )
    }
    return {Context, Provider}
}
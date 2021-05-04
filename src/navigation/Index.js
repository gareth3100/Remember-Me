import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// createStackNavigator lets the app to transition between
// where each screen is place on top of a stack.
// inside the StackNavigator, it lists all the screens that are in the stack

import ViewNotes from '../screens/ViewNotes';
import AddNotes from '../screens/AddNotes';

const StackNavigator = createStackNavigator({
    //  goes to the ViewNotes screen
    ViewNotes: {
        screen: ViewNotes
    },
    // goes to the AddNotes screen
    AddNotes: {
        screen: AddNotes
    }
},
    {
        initialRouteName: 'ViewNotes',
        headerMode: 'none',
        mode: 'modal'
    },
)

export default createAppContainer(StackNavigator);
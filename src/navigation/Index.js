import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// createStackNavigator lets the app to transition between
// where each screen is place on top of a stack.

import ViewNotes from '../screens/ViewNotes';
import AddNotes from '../screens/AddNotes';

const StackNavigator = createStackNavigator({
    ViewNotes: {
        screen: ViewNotes
    },
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
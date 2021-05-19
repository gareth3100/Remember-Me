import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
    wrapper: {
        height: 42,
        paddingHorizontal: 5,
        marginVertical: 5,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },

    loaderSection: {
        flexDirection: 'row',
    },

    textInput: {
        flex: 1,
        width: '100%',
    },

    error: {
        color: colors.danger,
        paddingTop: 5,
        fontSize: 12,
    },
});
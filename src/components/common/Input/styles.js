import { ScaledSheet } from 'react-native-size-matters';
import colors from '../../../assets/theme/colors';

export default ScaledSheet.create({
    wrapper: {
        height: '42@s',
        borderWidth: '1@s',
        borderRadius: '4@s',
        paddingHorizontal: '5@s',
        marginTop: '5@s',
    },

    inputContainer: {
        paddingVertical: '12@s',
    },

    textInput: {
        flex: '1@s',
        width: '100%',
    },

    error: {
        color: colors.danger,
        paddingTop: '5@s',
        fontSize: '12@s',
    },
});
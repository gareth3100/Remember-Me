import { ScaledSheet } from 'react-native-size-matters';
import colors from '../../../assets/theme/colors';

export default ScaledSheet.create({
    wrapper: {
        height: '42@s',
        paddingHorizontal: '5@s',
        marginVertical: '5@s',
        borderRadius: '4@s',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },

    loaderSection: {
        flexDirection: 'row',
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
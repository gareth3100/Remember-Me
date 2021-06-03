import { ScaledSheet } from 'react-native-size-matters';
import colors from '../../assets/theme/colors';

export default ScaledSheet.create({
    container: {flex: 1, backgroundColor: 'white'},

    imageView:{
        width: '150@s',
        height: '150@vs',
        borderRadius: '100@s',
        alignSelf: "center",
    },

    chooseText: {
        color: colors.primary,
        textAlign: 'center',
    },

    inputText: {
        height: '300@vs',
        fontSize: '30@s'
    },
});
import { ScaledSheet } from 'react-native-size-matters';
import colors from '../../assets/theme/colors';

export default ScaledSheet.create({
    container: {flex: '1@s', backgroundColor: 'white'},

    imageView:{
        width: '150@s',
        height: '150@vs',
        borderRadius: '100@s',
        alignSelf: "center",
    },

    chooseText: {
        paddingVertical: '10@s',
        color: colors.secondary,
        textAlign: 'center',
    },

    inputText: {
        height: '300@vs',
        fontSize: '30@s'
    },
});
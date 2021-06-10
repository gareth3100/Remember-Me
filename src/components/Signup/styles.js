import { ScaledSheet } from 'react-native-size-matters';
import colors from '../../assets/theme/colors';

export default ScaledSheet.create({
    logoImage: {
        height: '170@vs',
        width: '150@s',
        alignSelf: 'center',
        marginTop: '20@s',
    },

    title:{
        fontSize: '22@s',
        textAlign: 'center',
        paddingTop: '20@s',
        fontWeight: '500',
    },

    subTitle: {
        fontSize: '16@s',
        textAlign: 'center',
        paddingVertical: '20@vs',
        fontWeight: '500',
    },

    form: {
        paddingTop: '5@s',
    },

    createSection: {
        flexDirection: 'row',
    },

    linkButton: {
        paddingLeft: '6@s',
        color: colors.secondary,
        fontSize: '16@s',
    },

    infoText: {
        fontSize: '16@s',
    },
});
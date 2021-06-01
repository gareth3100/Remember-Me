import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
    logoImage: {
        height: 125,
        width: 150,
        alignSelf: 'center',
        marginTop: 50,
    },

    title:{
        fontSize: 22,
        textAlign: 'center',
        paddingTop: 20,
        fontWeight: '500',
    },

    subTitle: {
        fontSize: 16,
        textAlign: 'center',
        paddingVertical: 20,
        fontWeight: '500',
    },

    form: {
        paddingTop: 5,
    },

    createSection: {
        flexDirection: 'row',
    },

    linkButton: {
        paddingLeft: 6,
        color: colors.primary,
        fontSize: 16,
    },

    infoText: {
        fontSize: 16,
    },
});
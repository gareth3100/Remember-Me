import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
    logoImage: {
        height: 180,
        width: 180,
        alignSelf: 'center',
        marginTop: 40,
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
        color: colors.secondary,
        fontSize: 16,
    },

    infoText: {
        fontSize: 16,
    },
});
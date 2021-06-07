import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
    logoImage:{
        height: '200@s',
        width: '200@s',
        alignSelf: 'center',
        marginTop: 40,
    },

    item:{
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
    },

    itemText: {
        fontSize: 16,
        paddingVertical: '8@msr',
        paddingLeft: '20@msr',
    },
});
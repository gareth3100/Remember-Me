import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
    logoImage:{
        height: '90@s',
        width: '110@s',
        alignSelf: 'center',
        marginTop: 50,
    },

    item:{
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
    },

    itemText: {
        fontSize: 15,
        paddingVertical: '8@msr',
        paddingLeft: '20@msr',
    },
});
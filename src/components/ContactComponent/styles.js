import {ScaledSheet} from 'react-native-size-matters';
import colors from '../../assets/theme/colors';

export default ScaledSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: '20@msr',
    alignItems: 'center',
    flexGrow: '1@s',
  },
  item: {
    flexDirection: 'row',
    paddingVertical: '10@msr',
    alignItems: 'center',
    paddingHorizontal: '20@msr',
  },

  name: {fontSize: '17@s'},
  phoneNumber: {
    opacity: '0.6@s',
    fontSize: '16@s',
    paddingVertical: '5@msr',
  },

  floatingActionButton: {
    backgroundColor: '#ee82ee',
    width: '55@s',
    height: '55@vs',
    position: 'absolute',
    bottom: '25@s',
    right: '20@s',
    borderRadius: '100@s',
    justifyContent: 'center',
    alignItems: 'center',
  },

  floatingButton: {
    backgroundColor: '#48d1cc',
    width: '55@s',
    height: '55@vs',
    position: 'absolute',
    bottom: '25@s',
    right: '100@s',
    borderRadius: '100@s',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  actionButton: {
    flexGrow: '1@s',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingHorizontal: '10@msr',
  },

  actionText: {
    textAlign: 'center',
    maxWidth: '70@s',
    paddingTop: '5@msr',
    fontSize: '14@s',
    color: colors.white,
  },
  actionTextStyle: {
    padding: '40@msr',
  },
});
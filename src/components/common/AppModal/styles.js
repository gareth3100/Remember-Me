import { ScaledSheet } from 'react-native-size-matters';
import colors from '../../../assets/theme/colors';

export default ScaledSheet.create({
  wrapper: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    flex: '1@s',
    justifyContent: 'center',
  },

  modalView: {
    backgroundColor: colors.white,
    marginHorizontal: '20@s',
    borderRadius: '4@s',
    minHeight: '300@s',
  },

  header: {
    flexDirection: 'row',
    padding: '15@s',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: '21@s',
  },

  body: {
    minHeight: '300@s',
    paddingHorizontal: '20@s',
    paddingVertical: '10@s',
  },

  footer: {
    justifyContent: 'space-evenly',
    paddingVertical: '7@s',
    alignItems: 'center',
    flexDirection: 'row',
  },

  termsView: {
    width: '5@s',
    height: '5@s',
    borderRadius: '100@s',
    backgroundColor: colors.grey,
  },

  footerSeparator: {
    height: '0.5@s',
    backgroundColor: colors.grey,
  },

  footerItems: {
    width: '100%',
    padding: '10@s',
  },

  footerText: {
    fontSize: '12@s',
  },
});
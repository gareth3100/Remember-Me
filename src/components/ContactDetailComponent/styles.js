import {ScaledSheet} from 'react-native-size-matters';
import colors from '../../assets/theme/colors';

export default ScaledSheet.create({
  container: {
    flex: '1@s',
  },

  detailPhoto: {height: 300, width: '100%', resizeMode: 'cover'},

  imageContainer: {
    height: 300,
    width: '100%',
  },

  scrollview: {
    backgroundColor: colors.white,
  },

  names: {
    fontSize: '25@s',
  },

  imageView: {
    width: '150@s',
    height: '150@vs',
    borderRadius: '100@s',
    alignSelf: 'center',
  },
});

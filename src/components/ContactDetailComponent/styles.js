import {ScaledSheet} from 'react-native-size-matters';
import colors from '../../assets/theme/colors';

export default ScaledSheet.create({
  container: {
    flex: 1,
  },

  scrollview: {
    backgroundColor: colors.white,
  },

  names: {
    fontSize: 25,
  },

  imageView: {
    width: 150,
    height: 150,
    borderRadius: 100,
    alignSelf: 'center',
  }
});

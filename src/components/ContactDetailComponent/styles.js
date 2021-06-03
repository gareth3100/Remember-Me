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
    fontSize: 23,
  },

  imageView: {
    width: 150,
    height: 150,
    borderRadius: 100,
    alignSelf: 'center',
  },

  imageContainer: {
    height: 300,
    width: '100%',
  },

  detailPhoto: {
    height: 300,
    width: '100%',
    resizeMode: 'cover',
  },

  hrLine: {
    height: '10@s',
    borderColor: colors.danger,
    borderBottomWidth: 0.4,
  },

  middleText: {
    fontSize: 20,
    color: colors.primary,
    paddingVertical: 5,
  },

  phoneMobile: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
});

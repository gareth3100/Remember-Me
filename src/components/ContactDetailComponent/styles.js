import {ScaledSheet} from 'react-native-size-matters';
import colors from '../../assets/theme/colors';

export default ScaledSheet.create({
  container:{
    flex: '1@s', 
  },

  scrollview:{
    backgroundColor: colors.white,
  },

  names:{
    fontSize: '25@s'
<<<<<<< HEAD
  }
});
=======
=======
  names: {
    fontSize: 23,
  },

  imageView: {
    width: 150,
    height: 150,
    borderRadius: 100,
    alignSelf: 'center',
<<<<<<< HEAD
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
=======
>>>>>>> b05d08885a53db843aa3247882a82be7f62eb6d3
  }
>>>>>>> dd9109d4fd41eac6d7fbae1bd6bd6198b52c2d42
});
>>>>>>> 28249f60719df1c1dc039956c228834e108936e5

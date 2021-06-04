import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
  container: {
    flex: '1@s',
    padding: '10@msr',
  },

  item: {
    padding: '20@msr',
    marginVertical: '8@mvs',
    marginHorizontal: '16@ms',
  },

  wrapper: {
    flex: '1@s',
  },

  image: {
    width: '50@s',
    height: '50@vs',
    backgroundColor: 'skyblue',
  },
});
import {ScaledSheet} from 'react-native-size-matters';
import colors from '../../assets/theme/colors';

export default ScaledSheet.create({
  container: {
    height: 50,
    width: 200,
    alignSelf: 'center',
    borderColor: '#663399',
    backgroundColor: '#b284be',
    borderWidth: 1,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  // show image library
  library: {
    backgroundColor: '#b284be',
    width: '165@s',
    height: '50@vs',
    position: 'absolute',
    bottom: '-70@s',
    right: '180@s',
    borderRadius: '100@s',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // select from camera
  camera: {
    backgroundColor: '#b284be',
    width: '165@s',
    height: '50@vs',
    position: 'absolute',
    bottom: '-70@s',
    right: '5@s',
    borderRadius: '100@s',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // select from camera
  remove: {
    backgroundColor: '#b284be',
    width: '165@s',
    height: '50@vs',
    position: 'absolute',
    bottom: '-130@s',
    right: '5@s',
    borderRadius: '100@s',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // select from camera
  save: {
    backgroundColor: '#b284be',
    width: '165@s',
    height: '50@vs',
    position: 'absolute',
    bottom: '-130@s',
    right: '180@s',
    borderRadius: '100@s',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Recognized face
  recognized: {
    backgroundColor: '#b284be',
    width: '180@s',
    height: '50@vs',
    position: 'absolute',
    bottom: '-200@s',
    right: '85@s',
    borderRadius: '100@s',
    justifyContent: 'center',
    alignItems: 'center',
  },

  container_left: {
    height: 30,
    width: 100,
    flexDirection: 'row',
    borderColor: '#663399',
    borderWidth: 1,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  container_link: {
    height: 26,
    width: 200,
    alignSelf: 'center',
    borderColor: '#663399',
    borderWidth: 1,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 18,
    alignSelf: 'center',
    color: '#483d8b',
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  text_left: {
    fontSize: 16,
    flexDirection: 'row',
    color: '#663399',
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  text_link: {
    width: 200,
    height: 25,
    fontSize: 11,
    alignSelf: 'center',
    color: 'blue',
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    alignSelf: 'center',
    // position: 'absolute',
    // bottom: '20@s',
    // right: '30@s',
  },
  imageDisplay: {
    height: 225,
    width: 250,
    alignSelf: 'center',
    position: 'absolute',
    bottom: '-420@s',
    right: '70@s',
  },

  imageIdenfied: {
    height: 225,
    width: 250,
    alignSelf: 'center',
    position: 'absolute',
    bottom: '-40@s',
    right: '70@s',
  },
  text2: {
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 0,
    width: 200,
  },

  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
});

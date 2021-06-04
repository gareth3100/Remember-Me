// var ImagePicker = require('react-native-image-picker');
// import ImagePicker from 'react-native-image-picker';
// import * as ImagePicker from "react-native-image-picker"
import * as ImagePicker from "react-native-image-picker"
// import {launchImageLibrary} from 'react-native-image-picker'

var options = {
  includeBase64: true,
  quality: 1
};

let pick_cam = (cb) => {
  ImagePicker.launchCamera(options, (response) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    }
    else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    }
    else {
      // let source = { uri: response.uri };
      let source = { uri: response.assets[0].uri };
      let base64string = response.assets[0].base64;
      
      // cb(source, response.base64);
      cb(source, base64string);
    }
  });
}

module.exports = pick_cam;
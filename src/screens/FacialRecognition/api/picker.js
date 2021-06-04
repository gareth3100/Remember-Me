// var ImagePicker = require('react-native-image-picker');
// import ImagePicker from 'react-native-image-picker';
// import * as ImagePicker from "react-native-image-picker"
import * as ImagePicker from "react-native-image-picker"
// import {launchImageLibrary} from 'react-native-image-picker'


//I think i can throw away customButtons
var options = {
  includeBase64: true
};

let pick = (cb) => {
  ImagePicker.launchImageLibrary(options, (response) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    }
    else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    }
    else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    }
    else {
      // let source = { uri: response.uri };
      // updated:
      let source = { uri: response.assets[0].uri };
      let base64string = response.assets[0].base64

      //wtf why is this a list object?
      // console.log("picker response:", response);
      // console.log("picker list???: ", response.assets[0])
 
      // console.log("base64 type: ", typeof response.assets[0].base64)
      // console.log("base64 string: ", response.assets[0].base64)
      // ^of type string
      cb(source, base64string);
    }
  });
}


module.exports = pick;

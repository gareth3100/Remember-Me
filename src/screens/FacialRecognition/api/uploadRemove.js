import RNFetchBlob from 'react-native-fetch-blob';
import address from './address.json';

//original: https://khoapham-face.herokuapp.com/findByImage

// dont forget to include port 5000 or whatever when using this
let uploadRemove = data => {
  console.log('SENDING NEW TO LOCAL???');
  return RNFetchBlob.config({
    fileCache: true,
  }).fetch(
    'POST',
    'http://' + address.ip + ':5000/face_remove',
    {
      Authorization: 'Bearer access-token',
      otherHeader: 'foo',
      'Content-Type': 'multipart/form-data',
    },
    data,
  );
};

module.exports = uploadRemove;

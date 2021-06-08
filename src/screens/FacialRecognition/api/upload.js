import RNFetchBlob from 'react-native-fetch-blob'

//original: https://khoapham-face.herokuapp.com/findByImage

// dont forget to include port 5000 or whatever when using this
let uploadFile = (data) => {
  console.log("SENDING TO LOCAL???")
  return RNFetchBlob.config({
      fileCache : true,
    })
    .fetch('POST', 'http://10.0.1.9:5000/face_recognition', {
    Authorization : "Bearer access-token",
    otherHeader : "foo",
    'Content-Type' : 'multipart/form-data',
  }, data);
}

// let uploadFile = (data) => {
//   console.log("SENDING TO LOCAL???")
//   return RNFetchBlob.fetch('POST', 'http://10.0.1.9:5000/face_recognition', {
//     Authorization : "don't matter atm",
//     otherHeader : "foo",
//     'Content-Type' : 'multipart/form-data',
//   },[
//     {name: 'image', filename: 'avatar.png', data: binaryDataInBase64}
  
//   ]).then((resp)=>{
//     console.log(resp)
//   })
// }

module.exports = uploadFile;

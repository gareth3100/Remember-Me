import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Alert, Linking} from 'react-native';
import { withNavigation } from 'react-navigation';

import pick from './api/picker.js';
import pick_cam from './api/cam_picker.js';
import uploadFile from './api/upload.js';
import uploadNew from './api/uploadNew.js';
import uploadRemove from './api/uploadRemove.js';
import { CONTACT_LIST } from '../../constants/routeNames.js';

export default class FacialRecognition extends Component {
  
    constructor(props){
        super(props);
        this.state = {
          avatarSource: null,
          test_name: "test_inTABLE",
          data: null,
          pic: null,
          images: null,
          ret_image: null,
          ret_image_status: "Not Ready",
          input_status: null,
          name: 'No name'
        }
      }

    render(){
        let img = this.state.avatarSource == null? null:
            [<Image key="pic1"
                source={this.state.avatarSource}
                style={[styles.imageDisplay]}
            />,
            <Image key="pic2"
                source={{uri:  this.state.ret_image}}
                style={[styles.imageDisplay]}
            />
            ]
        let url = this.state.ret_image == null? null:
            <TouchableOpacity onPress={() => Linking.openURL(this.state.ret_image)} 
              style = {[styles.container_link]}>
              <Text
                style={[styles.text_link]}
              >If Results don't show, click</Text>
           </TouchableOpacity>
        return(
            <View>
                <TouchableOpacity onPress={this.show_library.bind(this)} 
                style = {[styles.container]}>
                    <Text
                    style={[styles.text]}
                    >Show Image Library</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.show_cam.bind(this)} style = {[styles.container]}>
                    <Text style={[styles.text]}>Select from Camera</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.remove_face_alert.bind(this)} style = {[styles.container]}>
                    <Text style={[styles.text]}>Remove Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.new_face_alert.bind(this)} style = {[styles.container]}>
                    <Text style={[styles.text]}>Save New Face</Text>
                </TouchableOpacity>

                <TextInput
                    placeholder = {"Enter new face name here"}
                    style = {[styles.input]}
                    onChangeText = {(val) => this.setState({input_status: val})}
                />

                <TouchableOpacity onPress={this.upload.bind(this)} style = {[styles.container]}>
                    <Text style={[styles.text]}>Recognize Face</Text>
                </TouchableOpacity>

                <Text>{"Recognized Status: " + this.state.name}</Text>
                {url}
                {img}
            </View>
        )
    }

    new_face_upload(){
        Alert.alert("uploading new face!!!");
        uploadNew([
          { name : 'test_name', data : this.state.test_name},
          { name : 'newName', data : this.state.input_status},
         {name: 'newFace', filename: 'new.png', data: this.state.data }
        ]).then(Alert.alert("Upload Complete!"))
       }
    
    remove_face_upload(){
        Alert.alert("Removing face!!!");
        uploadRemove([
          { name : 'test_name', data : this.state.test_name},
          { name : 'remName', data : this.state.input_status},
        ]).then(Alert.alert("Remove Req Complete!"))
       }
    
    remove_face_alert(){
        Alert.alert(
          "REMOVING FACE FROM!!!",
          "Are you sure you want to continue?",
          [
            {
              text: "OK",
              onPress: () => this.remove_face_upload(),
              style: "ok",
            },
            {
              text: "Cancel",
              onPress: () => Alert.alert("Cancel Pressed"),
              style: "cancel",
            }, 
          ],
          {
            cancelable: true,
            onDismiss: () =>
              console.log(
                "This alert was dismissed by tapping outside of the alert dialog."
              ),
          }
        );
       }
    
    new_face_alert(){
        Alert.alert(
          "SAVING NEW FACE TO SERVER!!!",
          "Are you sure you want to continue?",
          [
            {
              text: "OK",
              onPress: () => this.new_face_upload(),
              style: "ok",
            },
            {
              text: "Cancel",
              onPress: () => Alert.alert("Cancel Pressed"),
              style: "cancel",
            }, 
          ],
          {
            cancelable: true,
            onDismiss: () =>
              console.log(
                "This alert was dismissed by tapping outside of the alert dialog."
              ),
          }
        );
       }
    show_library(){
         pick((source, data) => this.setState({avatarSource: source, data: data}));
         console.log("what is avatar?: ", this.state.avatarSource);
       }
    show_cam(){
          pick_cam((source, data) => this.setState({avatarSource: source, data: data}));
        }
    upload(){
        this.setState({...this.state, name: "Getting Response From Server..."})
         uploadFile([
            {name : 'test_name', data : this.state.test_name},
            {name: 'IMAGE!!!', filename: 'avatar.png', data: this.state.data }
         ])
         .then(res => res.text())
         .then(imageLink => {
          var obj = JSON.parse(imageLink);
          this.setState({...this.state, name: obj.recognized_faces})
          //this.props.navigation.navigate(CONTACT_LIST, {names: obj.recognized_faces})
          return imageLink
         })
         .then(res => {
          // var image
          this.setState({...this.state, ret_image: "http://10.0.1.9:5000/return.png?time=" + new Date()})
          this.setState({...this.state, ret_image_status: "Ready"})
         })
         .catch(err => console.log(err + ''));
       }
}

const styles = StyleSheet.create({
    container: {
      height: 30,
      width: 200,
      alignSelf: 'center', 
      borderColor: 'blue', 
      borderWidth: 1, 
      borderRadius: 4, 
      alignItems: 'center', 
      justifyContent: 'center', 
      flexDirection: 'row'
    },
    container_left: {
      height: 30,
      width: 100,
      flexDirection:"row",
      borderColor: 'blue', 
      borderWidth: 1, 
      borderRadius: 4, 
      alignItems: 'center', 
      justifyContent: 'center', 
      flexDirection: 'row'
    },
    container_link: {
      height: 26,
      width: 200,
      alignSelf: 'center', 
      borderColor: 'blue', 
      borderWidth: 1, 
      borderRadius: 4, 
      alignItems: 'center', 
      justifyContent: 'center', 
      flexDirection: 'row'
    },
    text: { 
      fontSize: 16, 
      alignSelf: 'center',
      color : 'blue', 
      textAlign: 'center', 
      backgroundColor: 'transparent' 
    },
    text_left: { 
      fontSize: 16, 
      flexDirection:"row",
      color : 'blue', 
      textAlign: 'center', 
      backgroundColor: 'transparent' 
    },
    text_link: { 
      width: 200,
      height: 25,
      fontSize: 11, 
      alignSelf: 'center',
      color : 'blue', 
      textAlign: 'center', 
      backgroundColor: 'transparent' 
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
    imageDisplay: {
      height: 225,
      width: 250,
      alignSelf: 'center',
    },
})


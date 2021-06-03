import React, {useState} from 'react';
import Container from '../common/Container';
<<<<<<< HEAD
import {Text, TextInput, Switch, Image, View} from 'react-native';
=======
import {Text, TextInput, Image, View, Switch} from 'react-native';
>>>>>>> 69630a39aecb3692cab223675e58d78bd3e60e11
import styles from './styles';
import colors from '../../assets/theme/colors';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import CountryPicker from 'react-native-country-picker-modal';
import {DEFAULT_IMAGE_URI} from '../../constants/general';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ImagePicker from '../common/ImagePicker';
import colors from '../../assets/theme/colors';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';


//We store the contact information here
const CreateContactComponent = ({
  loading,
  error,
  onChangeText,
  setForm,
<<<<<<< HEAD
  onSubmit,
  toggleValueChange,
  form,
=======
  loading,
  error,
  toggleValueChange,
>>>>>>> 69630a39aecb3692cab223675e58d78bd3e60e11
  sheetRef,
  openSheet,
  localFile,
<<<<<<< HEAD
  onFileSelected,
}) => {
  //console.log('localFile', localFile);
  //console.log('error: >>', error)
=======
}) => {
  console.log('error :>>', error)
  const [inputText, setText] = useState('');
>>>>>>> 69630a39aecb3692cab223675e58d78bd3e60e11
  return (
      <View style={styles.container}>
      <Container>
        <Image
          width={scale(150)}
          height={verticalScale(150)}
          source={{uri: localFile?.path || DEFAULT_IMAGE_URI}}
          style={styles.imageView}
        />
        <TouchableOpacity onPress={openSheet}>
          <Text style={styles.chooseText}>Choose profile photo</Text>
        </TouchableOpacity>
<<<<<<< HEAD
          <Input
            onChangeText={(value) => {
              onChangeText({name: 'firstName', value: value});
            }}
            label="First name"
            value={form.firstName || ''}
            placeholder="Enter First name"
            error={error?.first_name?.[0]}
          />
          <Input
            error={error?.last_name?.[0]}
            onChangeText={(value) => {
              onChangeText({name: 'lastName', value: value});
            }}
            value={form.lastName || ''}
            label="Last name"
            placeholder="Enter Last name"
        />
=======

        <Container>
          <Input 
            onChangeText={(value) => {
              onChangeText({name: 'firstName', value: value});
            }}
            label="First Name" 
            value={form.firstName || ''}
            placeholder="Enter First Name" />
          <Input 
            onChangeText={(value) =>{
              onChangeText({name: 'lastName', value: value});
            }}
            label="Last Name" 
            value={form.lastName || ''}
            placeholder="Enter Last Name" />
>>>>>>> 69630a39aecb3692cab223675e58d78bd3e60e11
          <Input 
            error={error?.relationship?.[0]}
            onChangeText={(value) =>{
              onChangeText({name: 'relationship', value: value});
            }}
            value={form.relationship || ''}
            label="Relationship" 
            value={form.relationship|| ''}
            placeholder="Enter Relationship" />
          <Input 
            error={error?.birthDate?.[0]}
            onChangeText={(value) =>{
              onChangeText({name: 'birthDate', value: value});
            }}
            value={form.birthDate || ''}
            label="Birthday" 
            value={form.birthDate || ''}
            placeholder="Enter Birthday" />
          <Input
            icon={
              <CountryPicker
                withFilter
                withFlag
                countryCode={form.countryCode || undefined}
                withCountryNameButton={false}
                withCallingCode
                withCallingCodeButton
                withEmoji
                onSelect={(v) => {
                  const phoneCode=v.callingCode[0];
                  const cCode=v.cca2;
                  setForm({...form, phoneCode, countryCode:cCode});
                }}
              />
            }
            style={{paddingLeft: moderateScale(10)}}
            iconPosition="left"
<<<<<<< HEAD
            value={form.phoneNumber || ''}
            error={error?.phone_number?.[0]}
            onChangeText={(value) => {
              onChangeText({name: 'phoneNumber', value: value});
            }}
            label="Phone Number"
            placeholder="Enter phone number"
=======
            label="Phone Number"
            placeholder="Enter Phone Number"
            onChangeText={(value) => {
              onChangeText({name: 'phoneNumber', value: value});
            }}
            value={form.phoneNumber || ''}
>>>>>>> 69630a39aecb3692cab223675e58d78bd3e60e11
          />

          <Input
            onChangeText={(value) =>{
              onChangeText({name: 'address', value: value});
            }}
            label="Address" 
            value={form.address || ''}
            placeholder="Enter Address" />

          <View style={{padding: moderateScale(10)}}>
            <TextInput
              label="Add Note Description"
              style={{height: verticalScale(100)}}
              placeholder="Type here to add memory!"
              onChangeText={(value) =>{
                onChangeText({name: 'memory', value: value});
              }}
              value={form.memory || ''}
              defaultValue={inputText}
              value={form.memory || ''}
              mode="flat"
              multiline={true}
              scrollEnabled={true}
              returnKeyLabel="done"
              blurOnSubmit={true}
            />
          </View>
          <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: 10,
          }}>
          <Text style={{fontSize: 17}}>Add to favorites</Text>

<<<<<<< HEAD
          <Switch
            trackColor={{false: 'blue', true: colors.primary}}
            thumbColor="#FFFFFF"
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleValueChange}
            value={form.isFavorite}
          />
        </View>

        <CustomButton
          loading={loading}
          disabled={loading}
          onPress={onSubmit}
          primary
          title="Submit"
        />
=======
          <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: moderateScale(10), alignItems: 'center'}}>
            <Text style={{fontSize: scale(20)}}>Add to Favorites</Text>
              <Switch
                trackColor={{ false: "#767577", true: colors.primary }}
                thumbColor="#FFFFFF"
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleValueChange}
                value={form.isFavorite}
              />
          </View>

          <CustomButton loading={loading} disabled={loading} onPress={onSubmit} primary title="Submit"/>
>>>>>>> 69630a39aecb3692cab223675e58d78bd3e60e11
        </Container>

        <ImagePicker onFileSelected={onFileSelected} ref={sheetRef} />
      </View>
  );
}; //the onSubmit is from the screens/CreateContact/index.js

export default CreateContactComponent;
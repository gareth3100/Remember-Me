import React, {useState} from 'react';
import Container from '../common/Container';
import {Text, TextInput, Switch, Image, View} from 'react-native';
import styles from './styles';
import colors from '../../assets/theme/colors';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import CountryPicker from 'react-native-country-picker-modal';
import {DEFAULT_IMAGE_URI} from '../../constants/general';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ImagePicker from '../common/ImagePicker';


//We store the contact information here
const CreateContactComponent = ({
  loading,
  error,
  onChangeText,
  setForm,
  onSubmit,
  toggleValueChange,
  form,
  sheetRef,
  openSheet,
  localFile,
  onFileSelected,
}) => {
  //console.log('localFile', localFile);
  //console.log('error: >>', error)
  return (
      <View style={styles.container}>
      <Container>
        <Image
          width={150}
          height={150}
          source={{uri: localFile?.path || DEFAULT_IMAGE_URI}}
          style={styles.imageView}
        />
        <TouchableOpacity onPress={openSheet}>
          <Text style={styles.chooseText}>Choose profile photo</Text>
        </TouchableOpacity>
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
          <Input 
            error={error?.relationship?.[0]}
            onChangeText={(value) =>{
              onChangeText({name: 'relationship', value: value});
            }}
            value={form.relationship || ''}
            label="Relationship" 
            placeholder="Enter Relationship" />
          <Input 
            error={error?.birthDate?.[0]}
            onChangeText={(value) =>{
              onChangeText({name: 'birthDate', value: value});
            }}
            value={form.birthDate || ''}
            label="Birthday" 
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
            style={{paddingLeft: 10}}
            iconPosition="left"
            value={form.phoneNumber || ''}
            error={error?.phone_number?.[0]}
            onChangeText={(value) => {
              onChangeText({name: 'phoneNumber', value: value});
            }}
            label="Phone Number"
            placeholder="Enter phone number"
          />

          <Input
            onChangeText={(value) =>{
              onChangeText({name: 'address', value: value});
            }}
            label="Address" placeholder="Enter Address" />

          <View style={{padding: 10}}>
            <TextInput
              label="Add Note Description"
              style={{height: 100}}
              placeholder="Type here to add memory!"
              //onChangeText={inputText => setText(inputText)}
              onChangeText={(value) =>{
                onChangeText({name: 'memory', value: value});
              }}
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
        </Container>

        <ImagePicker onFileSelected={onFileSelected} ref={sheetRef} />
      </View>
  );
}; //the onSubmit is from the screens/CreateContact/index.js

export default CreateContactComponent;
import React, {useState} from 'react';
import Container from '../common/Container';
import {Text, TextInput, Image, View, Switch} from 'react-native';
import styles from './styles';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import CountryPicker from 'react-native-country-picker-modal';
import {DEFAULT_IMAGE_URI} from '../../constants/general';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ImagePicker from '../common/ImagePicker';
import colors from '../../assets/theme/colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

//We store the contact information here
const CreateContactComponent = ({
  onChangeText,
  form,
  onSubmit,
  setForm,
  loading,
  error,
  toggleValueChange,
  sheetRef,
  openSheet,
  closeSheet,
  onFileSelected,
  localFile,
}) => {
  console.log('error :>>', error);
  const [inputText, setText] = useState('');
  return (
    <>
      <View style={styles.container}>
        <Image
          width={scale(150)}
          height={verticalScale(150)}
          source={{uri: localFile?.path || DEFAULT_IMAGE_URI}}
          style={styles.imageView}
        />

        <TouchableOpacity onPress={openSheet}>
          <Text style={styles.chooseText}>Choose profile photo</Text>
        </TouchableOpacity>

        <Container>
          <Input
            onChangeText={value => {
              onChangeText({name: 'firstName', value: value});
            }}
            label="First Name"
            value={form.firstName || ''}
            placeholder="Enter First Name"
          />
          <Input
            onChangeText={value => {
              onChangeText({name: 'lastName', value: value});
            }}
            label="Last Name"
            value={form.lastName || ''}
            placeholder="Enter Last Name"
          />
          <Input
            onChangeText={value => {
              onChangeText({name: 'relationship', value: value});
            }}
            label="Relationship"
            value={form.relationship || ''}
            placeholder="Enter Relationship"
          />
          <Input
            onChangeText={value => {
              onChangeText({name: 'birthDate', value: value});
            }}
            label="Birthday"
            value={form.birthDate || ''}
            placeholder="Enter Birthday"
          />
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
                onSelect={v => {
                  const phoneCode = v.callingCode[0];
                  const cCode = v.cca2;
                  setForm({...form, phoneCode, countryCode: cCode});
                }}
              />
            }
            style={{paddingLeft: moderateScale(10)}}
            iconPosition="left"
            label="Phone Number"
            placeholder="Enter Phone Number"
            onChangeText={value => {
              onChangeText({name: 'phoneNumber', value: value});
            }}
            value={form.phoneNumber || ''}
          />

          <Input
            onChangeText={value => {
              onChangeText({name: 'address', value: value});
            }}
            label="Address"
            value={form.address || ''}
            placeholder="Enter Address"
          />

          <View style={{padding: moderateScale(10)}}>
            <TextInput
              label="Add Note Description"
              style={{height: verticalScale(100)}}
              placeholder="Type here to add memory!"
              onChangeText={value => {
                onChangeText({name: 'memory', value: value});
              }}
              value={form.memory || ''}
              defaultValue={inputText}
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
              justifyContent: 'space-between',
              paddingVertical: moderateScale(10),
              alignItems: 'center',
            }}>
            <Text style={{fontSize: scale(20)}}>Add to Favorites</Text>
            <Switch
              trackColor={{false: '#767577', true: colors.primary}}
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
    </>
  );
}; //the onSubmit is from the screens/CreateContact/index.js

export default CreateContactComponent;

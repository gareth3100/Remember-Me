import React, {useState} from 'react';
import Container from '../common/Container';
import {Text, TextInput, Image, View} from 'react-native';
import styles from './styles';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import CountryPicker from 'react-native-country-picker-modal';
import {DEFAULT_IMAGE_URI} from '../../constants/general';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ImagePicker from '../common/ImagePicker';

const CreateContactComponent = ({
  sheetRef,
  openSheet,
  closeSheet,
  onFileSelected,
  localFile,
}) => {
  const [inputText, setText] = useState('');
  console.log('localFile', localFile);
  return (
    <>
      <View style={styles.container}>
        <Image
          width={150}
          height={150}
          source={{uri: localFile?.path || DEFAULT_IMAGE_URI}}
          style={styles.imageView}
        />

        <TouchableOpacity onPress={openSheet}>
          <Text style={styles.chooseText}>Choose profile photo</Text>
        </TouchableOpacity>

        <Container>
          <Input label="First Name" placeholder="Enter First Name" />
          <Input label="Last Name" placeholder="Enter Last Name" />
          <Input label="Relationship" placeholder="Enter Relationship" />
          <Input label="Birthday" placeholder="Enter Birthday" />
          <Input
            icon={
              <CountryPicker
                withFilter
                withFlag
                withCountryNameButton={false}
                withCallingCode
                withEmoji
                onSelect={() => {}}
              />
            }
            style={{paddingLeft: 10}}
            iconPosition="left"
            label="Phone Number"
            placeholder="Enter Phone Number"
          />

          <Input label="Address" placeholder="Enter Address" />

          <View style={{padding: 10}}>
            <TextInput
              label="Add Note Description"
              style={{height: 100}}
              placeholder="Type here to add memory!"
              onChangeText={inputText => setText(inputText)}
              defaultValue={inputText}
              mode="flat"
              multiline={true}
              scrollEnabled={true}
              returnKeyLabel="done"
              blurOnSubmit={true}
            />
          </View>

          <CustomButton primary title="Submit" />
        </Container>

        <ImagePicker onFileSelected={onFileSelected} ref={sheetRef} />
      </View>
    </>
  );
};

export default CreateContactComponent;

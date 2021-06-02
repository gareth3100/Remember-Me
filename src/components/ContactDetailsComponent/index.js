import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  ScrollView,
} from 'react-native';
import colors from '../../assets/theme/colors';
import {CONTACT_DETAIL, CREATE_CONTACT} from '../../constants/routeNames';
import Icon from '../common/Icon';
import CustomButton from '../common/CustomButton';
import styles from './styles';
//import ImageComponent from './ImageComponent';
import {DEFAULT_IMAGE_URI} from '../../constants/general';
import ImagePicker from '../common/ImagePicker';

  const ContactDetailsComponent = ({
    contact,
    openSheet,
    sheetRef,
    onFileSelected,
    updatingImage,
    localFile,
    uploadSucceeded,
  }) => {
  const {navigate} = useNavigation();

  const {
    contact_picture,
    first_name,
    country_code,
    phone_number,
    last_name,
  } = contact;

  return (
    <ScrollView style={styles.scrollView}>
       <View style={styles.container}>

        {(contact_picture || uploadSucceeded) && (
          <ImageComponent src={contact_picture || localFile?.path} />
        )}

        {!contact_picture && !uploadSucceeded && (
          <View style={{alignItems: 'center', paddingVertical: 20}}>
            <Image
              width={150}
              height={150}
              source={{uri: localFile?.path || DEFAULT_IMAGE_URI}}
              style={styles.imageView}
            /> 

            <TouchableOpacity
              onPress={() => {
                openSheet();
              }}>
              <Text style={{color: colors.primary}}>
                {' '}
                {updatingImage ? 'updating...' : 'Add picture'}{' '}
              </Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.content}>
          <Text style={styles.names}>
            {first_name + ' ' + last_name}
          </Text>
        </View>

        <View style={styles.hrLine} />

  
        <CustomButton
          style={styles.bottom}
          primary
          title="Edit Contact"
          onPress={() => {
            navigate(CREATE_CONTACT, {contact, editing: true});
          }}
        />
      </View>

      <ImagePicker onFileSelected={onFileSelected} ref={sheetRef} />
    </ScrollView>
  );
};

export default ContactDetailsComponent;
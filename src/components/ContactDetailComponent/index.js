import {
  NavigationHelpersContext,
  useNavigation,
} from '@react-navigation/native';
import React, {useRef} from 'react';
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
import AppModal from '../common/AppModal';
import CustomButton from '../common/CustomButton';
import Icon from '../common/Icon';
import styles from './styles';
import {CONTACT_DETAIL, CREATE_CONTACT} from '../../constants/routeNames';
import Container from '../common/Container';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ImageComponent from './ImageComponent';
import {DEFAULT_IMAGE_URI} from '../../constants/general';

const ContactDetailComponent = ({contacts, localFile}) => {
  const {
    firstName,
    lastName,
    phoneNumber,
    phoneCode,
    address,
    birthDate,
    memory,
    relationship,
    contact_picture,
  } = contacts;

  const {navigate} = useNavigation();

  return (
    <ScrollView style={styles.scrollview}>
      <View style={(styles.container, {alignItems: 'center'})}>
        {contact_picture && <ImageComponent src={contact_picture} />}

        {!contact_picture && (
          <View style={{alignItems: 'center', paddingVertical: 20}}>
            <Image
              width={150}
              height={150}
              source={{uri: localFile?.path || DEFAULT_IMAGE_URI}}
              style={styles.imageView}
            />

            <TouchableOpacity>
              <Text style={{color: colors.primary}}>Add Picture</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* this is where the screen displays the contact details */}
        <Text style={styles.names}>Name: {firstName + ' ' + lastName}</Text>
        <View style={styles.hrLine} />

        <Text style={styles.phoneMobile}>
          Phone Number: {phoneCode + ' ' + phoneNumber}
        </Text>
        <View style={styles.hrLine} />
        <Text style={styles.middleText}>Relationship: {relationship}</Text>
        <Text style={styles.middleText}>Address: {address}</Text>
        <Text style={styles.middleText}>Date of Birth: {birthDate}</Text>
        <View style={styles.hrLine} />
        <View style={{flex: 1}}>
          <Text style={styles.names}>Memory: {memory}</Text>
        </View>

        <CustomButton
          style={{width: 256, alignSelf: 'center'}}
          primary
          title="Edit Contact"
          onPress={() => {
            navigate(CREATE_CONTACT, {contacts, editing: true});
          }}
        />
      </View>
    </ScrollView>
  );
};

export default ContactDetailComponent;

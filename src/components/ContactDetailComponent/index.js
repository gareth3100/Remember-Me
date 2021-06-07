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
import CustomButton from '../common/CustomButton';
import Icon from '../common/Icon';
import styles from './styles';
import {CONTACT_DETAIL, CREATE_CONTACT} from '../../constants/routeNames';
import Container from '../common/Container';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import ImageComponent from './ImageComponent';
import {DEFAULT_IMAGE_URI} from '../../constants/general';
import {List} from 'react-native-paper';
import AppModal from '../common/AppModal';

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
    loading,
  } = contacts;

  const {navigate} = useNavigation();

  return (
    <ScrollView style={styles.scrollview}>
      <View style={(styles.container, {alignItems: 'stretch'})}>
        {contact_picture && <ImageComponent src={contact_picture} />}

        {!contact_picture && (
          <Image
            width={150}
            height={150}
            source={{uri: localFile?.path || DEFAULT_IMAGE_URI}}
            style={styles.imageView}
          />
        )}
        <View>
          <List.Section>
            <List.Subheader>Basic Information</List.Subheader>
            <List.Item
              title="Full Name"
              description={firstName + ' ' + lastName}
              titleStyle={styles.test}
              left={() => <List.Icon icon="account" />}
              size={50}
            />
            <List.Item
              title="Phone Number"
              description={phoneCode + ' ' + phoneNumber}
              left={() => <List.Icon icon="phone" />}
            />
            <List.Item
              title="Relationship"
              description={relationship}
              left={() => <List.Icon icon="account-heart" />}
            />
            <List.Item
              title="Address"
              description={address}
              left={() => <List.Icon icon="drone" />}
            />
            <List.Item
              title="Birthday"
              description={birthDate}
              left={() => <List.Icon icon="cake-variant" />}
            />
            <List.Item
              title="Memory"
              description={memory}
              left={() => <List.Icon icon="book-open-page-variant" />}
            />
          </List.Section>
        </View>
        {/*
        // <Text style={styles.names}>{firstName + ' ' + lastName}</Text>
        // <Text style={styles.names}>{phoneCode + ' ' + phoneNumber}</Text>
        // <Text style={styles.names}>{relationship}</Text>
        // <Text style={styles.names}>{address}</Text>
        // <Text style={styles.names}>{birthDate}</Text>
        // <Text style={styles.names}>{memory}</Text>
        */}
      </View>
      <CustomButton
        style={{width: scale(256), alignSelf: 'center'}}
        primary title="Edit Contact"
        onPress={() => {
          navigate(CREATE_CONTACT, {contacts, editing: true});
        }}
      />
    </ScrollView>
  );
};

export default ContactDetailComponent;
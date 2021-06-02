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
import { Colors } from 'react-native/Libraries/NewAppScreen';

const ContactDetailComponent = ({contacts}) => {
    const {firstName, lastName, phoneNumber, phoneCode, address, birthDate, memory, relationship} = contacts;

    return(
      <ScrollView style={styles.scrollview}>
        <View style={styles.container, {alignItems: 'center'}}>
          <Text style={styles.names}>{firstName + ' ' + lastName}</Text>
          <Text style={styles.names}>{phoneCode + ' ' + phoneNumber}</Text>
          <Text style={styles.names}>{address}</Text>
          <Text style={styles.names}>{memory}</Text>
        </View>
      </ScrollView>
    );

  };

export default ContactDetailComponent;
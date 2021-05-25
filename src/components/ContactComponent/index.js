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
} from 'react-native';
import colors from '../../assets/theme/colors';
import AppModal from '../common/AppModal';
import CustomButton from '../common/CustomButton';
import Icon from '../common/Icon';
import styles from './styles';
import {CONTACT_DETAIL, CREATE_CONTACT} from '../../constants/routeNames';

const ContactsComponent = ({modalVisible, setModalVisible}) => {
  const {navigate} = useNavigation();

  return (
    <>
      <View>
        <AppModal
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
        />
        <CustomButton
          title="Open Modal"
          secondary
          onPress={() => {
            setModalVisible(true);
          }}
        />
      </View>

      <TouchableOpacity
        style={styles.floatingActionButton}
        onPress={() => {
          navigate(CREATE_CONTACT);
        }}>
        <Icon name="plus" color={colors.white}></Icon>
      </TouchableOpacity>
    </>
  );
};

export default ContactsComponent;
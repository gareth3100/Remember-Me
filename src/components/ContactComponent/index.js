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
import Message from '../common/Message';

const ContactsComponent = ({modalVisible, data, loading, setModalVisible}) => {
  const {navigate} = useNavigation();
  
  const ListEmptyComponent = () => {
    return (
    <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
      <Message info message="No contacts to show" />
    </View>
    );
  };
  
  // const renderItem = ({item}) => {
  //   console.log('item', item);
  //   return (
  //   <TouchableOpacity>
  //     <Text>Contact 1</Text>
  //   </TouchableOpacity>
  //   )};

  return (
    <>
      <View>
        <AppModal
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
        />

        {/* {loading && (
        <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
          <ActivityIndicator color={colors.primary} size="large"/>
        </View>  
        )}; */}

        {/* {!loading && (
        <FlatList 
          renderItem={renderItem}
          data={data} 
          keyExtractor={(item) => String(item.id)} 
          ListEmptyComponent={ListEmptyComponent}
          />
        )}; */}

        {/* <CustomButton
          title="Open Modal"
          secondary
          onPress={() => {
            setModalVisible(true);
          }}
        /> */}
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
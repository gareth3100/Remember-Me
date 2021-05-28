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
import Swipeable from 'react-native-gesture-handler/Swipeable';

const ContactsComponent = ({sortBy, data, loading, setModalVisible}) => {
  const {navigate} = useNavigation();

  const swipeableItemRefs = useRef([]);

  const toggleSwipeable = (key) => {
    swipeableItemRefs.current.forEach((ref, i) => {
      if (ref.id !== key) {
        swipeableItemRefs.current?.[i]?.swipeable?.close();
      }
    });
  };
  
  const ListEmptyComponent = () => {
    return (
    <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
      <Message info message="No contacts to show" />
    </View>
    );
  };

  const renderItem = ({item}) => {
    const {
      contact_picture,
      first_name,
      country_code,
      phone_number,
      last_name,
    } = item;

    const {id} = item;
  };
  
  // reference this https://github.com/CryceTruly/rn-contacts-youtube/blob/main/src/components/ContactsComponent/index.js  

  return (
    <>
      <View style={{backgroundColor: colors.white, flex: 1}}>
        {loading && (
          <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
            <ActivityIndicator color={colors.primary} size="large" />
          </View>
        )}

        {!loading && (
          <View style={[{paddingVertical: 20}]}>
            <FlatList
             renderItem={renderItem}
              data={
                sortBy
                  ? data.sort((a, b) => {
                      if (sortBy === 'First Name') {
                        if (b.first_name > a.first_name) {
                          return -1;
                        } else {
                          return 1;
                        }
                      }
                      if (sortBy === 'Last Name') {
                        if (b.last_name > a.last_name) {
                          return -1;
                        } else {
                          return 1;
                        }
                      }
                    })
                  : data
              }
              ItemSeparatorComponent={() => (
                  <View
                    style={{height: 0.5, backgroundColor: colors.grey}}></View>
              )}
              keyExtractor={(item) => String(item.id)}
              ListEmptyComponent={ListEmptyComponent}
              ListFooterComponent={<View style={{height: 150}}></View>}
            />
          </View>
        )}
      </View>


      <TouchableOpacity
        style={styles.floatingActionButton}
        onPress={() => {
          navigate(CREATE_CONTACT);
        }}>
        <Icon name="plus" size={21} color={colors.white}></Icon>
      </TouchableOpacity>
    </>
  );
};

export default ContactsComponent;
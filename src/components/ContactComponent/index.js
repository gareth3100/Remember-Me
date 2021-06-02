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
import {s} from 'react-native-size-matters';
import colors from '../../assets/theme/colors';
import AppModal from '../common/AppModal';
import CustomButton from '../common/CustomButton';
import Icon from '../common/Icon';
import styles from './styles';
import {CONTACT_DETAIL, CREATE_CONTACT} from '../../constants/routeNames';
import Message from '../common/Message';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const ContactComponent = ({sortBy, data, loading, setModalVisible, modalVisible}) => {
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
      <Message info message="No Contacts to show"/>
    </View>
    );
  };

  const renderItem = ({item}) => {

    // If you want to understand the data seen on firebase, uncomment this lines
    //console.log('This is item')
    //console.log('item', item)
    //console.log('Done with item')

    const {firstName, lastName, phoneNumber, phoneCode} = item;

    const renderLeftActions = (progress, dragX) => {
      return (
        <View style={[{flexDirection: 'row', paddingRight: 5}]}>
          <TouchableOpacity style={styles.actionButton} onPress={() => {}}>
            <Icon
              name={'heart-outline'}
              type="materialCommunity"
              size={22}
              color={colors.white}
            />
            <Text numberOfLines={1} style={styles.actionText}>
              Favorite
            </Text>
          </TouchableOpacity>
        </View>
      );
    };
    const {id} = item;
    return (
      <Swipeable
        ref={(ref) =>
          swipeableItemRefs.current.push({
            id,
            swipeable: ref,
          })
        }
        onSwipeableWillOpen={() => toggleSwipeable(id)}
        renderLeftActions={(progress, dragX) =>
          renderLeftActions(progress, dragX, item)
        }
        renderRightActions={(progress, dragX) =>
          renderLeftActions(progress, dragX, item)
        }> 

      <TouchableOpacity style={styles.itemContainer}
          onPress={() => {
            navigate(CONTACT_DETAIL, {item});
          }}>
        <View style={styles.item}>
          {/* this is for the profile picture */}
          <View style={styles.profilePicture}>
            <Text style={[styles.name, {color: colors.white}]}>{firstName[0]}</Text>
            <Text style={[styles.name, {color: colors.white}]}>{lastName[0]}</Text>
          </View>
          {/* this is for the name and phone number*/}
          <View style={{paddingLeft: 20, }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.name}>{firstName}</Text>
              <Text style={styles.name}> {lastName}</Text>
            </View>
            <Text style={styles.phoneNumber}>{`${phoneCode} ${phoneNumber}`}</Text>
          </View>
        </View>

        {/* this is for the arrow */}
        <Icon name="right" type="ant" color={colors.grey}/>
      </TouchableOpacity>
    </Swipeable>
    );
  };
  
  // Uncommenting this shows you the full data that we get from getContacts.js in src/context/constants
  // console.log(data)

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
          <Icon size={12} style={{alignItems: 'center', textAlign: 'center'}}color={colors.white}>Add Contact</Icon>
      </TouchableOpacity>
    </>
  );
};

export default ContactComponent;
import {
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
import Icon from '../common/Icon';
import styles from './styles';
import {CONTACT_DETAIL, CREATE_CONTACT, FACE_PAGE} from '../../constants/routeNames';
import Message from '../common/Message';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const ContactsComponent = ({sortBy, data, loading, setModalVisible, modalVisible}) => {
  const {navigate} = useNavigation();

  const swipeableItemRefs = useRef([]);

  // const toggleSwipeable = (key) => {
  //   swipeableItemRefs.current.forEach((ref, i) => {
  //     if (ref.id !== key) {
  //       swipeableItemRefs.current?.[i]?.swipeable?.close();
  //     }
  //   });
  // };
  
  const ListEmptyComponent = () => {
    return (
    <View style={{paddingVertical: moderateScale(100), paddingHorizontal: moderateScale(100), alignItems: 'center'}}>
      <Message info message="No Contacts"/>
    </View>
    );
  };

  const renderItem = ({item}) => {

    // If you want to understand the data seen on firebase, uncomment this lines
    // console.log('This is item')
    // console.log('item', item)
    // console.log('Done with item')

    const {firstName, lastName, phoneNumber, phoneCode} = item;

    return(
      <TouchableOpacity style={styles.itemContainer} onPress={() => {
        navigate(CONTACT_DETAIL, {item});
      }}>
        <View style={styles.item}>
          <View style={{width: scale(45), height: verticalScale(45), flexDirection: 'row',backgroundColor: colors.purple, justifyContent: 'center', alignItems: 'center', borderRadius: scale(100)}}>
            <Text style={[styles.name, {color: colors.white}]}>{firstName[0]}</Text>
            <Text style={[styles.name, {color: colors.white}]}>{lastName[0]}</Text>
          </View>

          <View style={{paddingLeft: moderateScale(20), }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.name}>{firstName}</Text>
              <Text style={styles.name}> {lastName}</Text>
            </View>
            <Text style={styles.phoneNumber}>{`${phoneCode} ${phoneNumber}`}</Text>
          </View>
        </View>
        <Icon name="right" type="ant" color={colors.grey}/>
      </TouchableOpacity>
    );

  };
  
  // Uncommenting this shows you the full data that we get from getContacts.js in src/context/constants
  // console.log(data)

  return (
  
    <>
      <View style={{backgroundColor: colors.white}}>

        {loading && (
          <View style={{paddingVertical: moderateScale(100), paddingHorizontal: moderateScale(100)}}>
            <ActivityIndicator size="large" color={colors.primary} />
          </View>
        )}

        {!loading && (
        <View style={[{paddingVertical: moderateScale(20)}]}>
          <FlatList
            renderItem={renderItem}
            data={sortBy? data.sort((a,b) => {
              if (sortBy === 'First Name'){
                if(b.firstName > a.firstName){
                  return -1
                } else {
                  return 1
                }
              } 

              if (sortBy === 'Last Name'){
                if(b.lastName > a.lastName){
                  return -1
                } else {
                  return 1
                }
              } 

            }) : data}
            ItemSeparatorComponent={() => (
              <View style={{height: verticalScale(1), backgroundColor: colors.grey}}></View>
            )}
            keyExtractor={(item) => String(item.id)}
            ListEmptyComponent={ListEmptyComponent}
            ListFooterComponent={<View style={{height: verticalScale(150)}}></View>}
          />
        </View>
        )}

      </View>

      <TouchableOpacity
          style={styles.floatingActionButton}
          onPress={() => {
            navigate(CREATE_CONTACT);
          }}>
          <Icon name="plus" size={scale(12)} style={{alignItems: 'center', textAlign: 'center'}}color={colors.white}> Add Contact</Icon>
      </TouchableOpacity>

      <TouchableOpacity 
            style={styles.floatingButton} 
            onPress={()=> {
                navigate(FACE_PAGE);
            }}>
            <Icon name="plus" size={scale(12)} style={{alignItems: 'center', textAlign: 'center'}}color={colors.white}> See Face</Icon>        
        </TouchableOpacity>
    </>
  );
};

export default ContactsComponent;
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
    <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
      <Message info message="No contacts to show" />
    </View>
    );
  };

  const renderItem = ({item}) => {

    // If you want to understand the data seen on firebase, uncomment this lines
    // console.log('This is item')
    // console.log('item', item)
    // console.log('Done with item')

    const {firstName, lastName} = item;

    return(
      <TouchableOpacity style={styles.itemContainer}>
        <View style={styles.item}>
          <View style={{width: 45, height: 45, backgroundColor: colors.grey}}>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text> {firstName}</Text>
            <Text> {lastName}</Text>
          </View>
        </View>
        <Icon name="right" type="ant"/>
      </TouchableOpacity>
    );

  };
  
  // Uncommenting this shows you the full data that we get from getContacts.js in src/context/constants
  // console.log(data)

  return (
  
    <>
      <View>
        <AppModal
          modalFooter={<></>}
          modalBody={
            <View>
              <Text>Hello</Text>
            </View>
          }
          title="My Profile!"
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
        />

        {loading && (
          <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
            <ActivityIndicator size="large" color={colors.primary} />
          </View>
        )}

        {!loading && (
        <View style={[{paddingVertical: 20}]}>
          <FlatList
            renderItem={renderItem}
            data={data}
            keyExtractor={(item) => String(item.id)}
            ListEmptyComponent={ListEmptyComponent}
            ListFooterComponent={<View style={{height: 50}}></View>}
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
    // <>
    //   <View style={{backgroundColor: colors.white, flex: 1}}>
    
    //     {loading && (
    //       <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
    //         <ActivityIndicator color={colors.primary} size="large" />
    //       </View>
    //     )}

    //     {!loading && (
    //         <FlatList
    //          renderItem={renderItem}
    //          data={[]}
    //         //   data={
    //         //     sortBy
    //         //       ? data.sort((a, b) => {
    //         //           if (sortBy === 'First Name') {
    //         //             if (b.first_name > a.first_name) {
    //         //               return -1;
    //         //             } else {
    //         //               return 1;
    //         //             }
    //         //           }
    //         //           if (sortBy === 'Last Name') {
    //         //             if (b.last_name > a.last_name) {
    //         //               return -1;
    //         //             } else {
    //         //               return 1;
    //         //             }
    //         //           }
    //         //         })
    //         //       : data
    //         //   }
    //         //   ItemSeparatorComponent={() => (
    //         //       <View
    //         //         style={{height: 0.5, backgroundColor: colors.grey}}></View>
    //         //   )}
    //           // keyExtractor={(item) => String(item.id)}
    //           ListEmptyComponent={ListEmptyComponent}
    //           // ListFooterComponent={<View style={{height: 150}}></View>}
    //         />
    //     )}
    //   </View>


    //   <TouchableOpacity
    //     style={styles.floatingActionButton}
    //     onPress={() => {
    //       navigate(CREATE_CONTACT);
    //     }}>
    //     <Icon size={12} style={{alignItems: 'center', textAlign: 'center'}}color={colors.white}>Add Contact</Icon>
    //   </TouchableOpacity>
    // </>
  );
};

export default ContactsComponent;
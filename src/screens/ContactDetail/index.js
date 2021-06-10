import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useContext} from 'react';
import {ActivityIndicator, Alert, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../../assets/theme/colors';
import Icon from '../../components/common/Icon';
import ContactDetailComponent from '../../components/ContactDetailComponent';
import {CONTACT_LIST} from '../../constants/routeNames';
import deleteContact from '../../context/actions/contacts/deleteContact';
import {GlobalContext} from '../../context/Provider';
import {scale, moderateScale} from 'react-native-size-matters';

const ContactDetail = () => {
  const {params: {item = {}} = {}} = useRoute();
  console.log(item);
  const {
    contactsDispatch,
    contactsState: {
      deleteContact: {loading},
    },
  } = useContext(GlobalContext);
  const {setOptions, navigate} = useNavigation();

  useEffect(() => {
    if (item) {
      setOptions({
        title: item.firstName + ' ' + item.lastName,
        headerRight: () => {
          return (
            <View
              style={{flexDirection: 'row', paddingRight: moderateScale(10)}}>
              <TouchableOpacity>
                <View>
                  <Icon
                    size={scale(21)}
                    color={colors.grey}
                    name={item.isFavorite ? 'star' : 'star-border'}
                    type="material"
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={{paddingLeft: scale(10)}}
                onPress={() => {
                  Alert.alert(
                    'Deleting Contact!',
                    'Are you sure you want to delete ' +
                      item.firstName +
                      " from your contacts? \n\nIf yes, press 'OK' \n\nIf no, press 'Cancel'",
                    [
                      {
                        text: 'Cancel',
                        onPress: () => {},
                      },

                      {
                        text: 'OK',
                        onPress: () => {
                          deleteContact(item.id)(contactsDispatch)(() => {
                            navigate(CONTACT_LIST);
                          });
                        },
                      },
                    ],
                  );
                }}>
                <View>
                  {loading ? (
                    <ActivityIndicator size="small" color={colors.primary} />
                  ) : (
                    <Icon
                      size={scale(21)}
                      color={colors.grey}
                      name="delete"
                      type="material"
                    />
                  )}
                </View>
              </TouchableOpacity>
            </View>
          );
        },
      });
    }
  }, [item, loading]);

  return <ContactDetailComponent contacts={item} />;
};

export default ContactDetail;

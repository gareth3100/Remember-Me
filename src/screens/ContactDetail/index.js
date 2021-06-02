import {useRoute, useNavigation} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {TouchableOpacity, View} from 'react-native';
import colors from '../../assets/theme/colors';
import Icon from '../../components/common/Icon';
import ContactDetailComponent from '../../components/ContactDetailComponent';

const ContactDetail = () => {
  const {params: {item = {}} = {}} = useRoute();

  const {setOptions} = useNavigation();

  useEffect(() => {
    if (item) {
      setOptions({
        title: item.firstName + ' ' + item.lastName,
        headerRight: () => {
          return (
            <View style={{flexDirection: 'row', paddingRight: 10}}>
              <TouchableOpacity>
                <Icon
                  size={21}
                  color={colors.grey}
                  name={item.isFavorite ? 'star' : 'star-border'}
                  type="material"
                />
              </TouchableOpacity>

              <TouchableOpacity style={{flexDirection: 'row', paddingLeft: 10}}>
                <Icon
                  size={21}
                  color={colors.grey}
                  name="delete"
                  type="material"
                />
              </TouchableOpacity>
            </View>
          );
        },
      });
    }
  }, [item]);
  console.log('item', item);

  return <ContactDetailComponent contacts={item} />;
};

export default ContactDetail;

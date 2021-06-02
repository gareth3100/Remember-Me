import React from 'react';

import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import Container from '../../components/common/Container';
import colors from '../../assets/theme/colors';
import AppModal from '../common/AppModal';
import Icon from '../common/Icon';

const SettingsComponent = ({modalVisible, setModalVisible, settingsOptions, prefArray}) => {
  return (

    <>

    <AppModal
        modalVisible = {modalVisible}
        modalFooter = {<></>}
        closeOnTouchOutside={false}
        modalBody ={<View>
          {prefArray.map(({name, selected, onPress})=><View>
            <TouchableOpacity 
              onPress={onPress} 
              style={{flexDirection: 'row', paddingVertical: 5, alignItems: 'center'}}>
              {selected && <Icon size={17} name='check' type="material"/>}
              <Text style={{fontSize: 17, paddingLeft: selected? 15 : 30}}>{name}</Text>
            </TouchableOpacity>
          </View>)}
        </View>}
        title = "Sort by"
        setModalVisible = {setModalVisible}
    />

    <ScrollView style={{backgroundColor: colors.white}}>
      {settingsOptions.map(({title, subTitle, onPress}, index) => (
        <TouchableOpacity key={title} onPress={onPress}>
          <View
            style={{paddingHorizontal: 20, paddingBottom: 20, paddingTop: 20}}>
            <Text style={{fontSize: 17}}>{title}</Text>
            {subTitle && (
              <Text style={{fontSize: 14, opacity: 0.5, paddingTop: 5}}>
                {subTitle}
              </Text>
            )}
          </View>

          <View style={{height: 0.5, backgroundColor: colors.grey}} />
        </TouchableOpacity>
      ))}
    </ScrollView>

    </>
  );
};

export default SettingsComponent;

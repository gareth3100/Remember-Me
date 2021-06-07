import React from 'react';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import Container from '../../components/common/Container';
import colors from '../../assets/theme/colors';
import Icon from '../common/Icon';
import AppModal from '../common/AppModal';

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
              {selected && <Icon size={scale(17)} name='check' type="material"/>}
              <Text style={{fontSize: scale(17), paddingLeft: selected? moderateScale(15) : moderateScale(30)}}>{name}</Text>
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
            style={{paddingHorizontal: moderateScale(20), paddingBottom: moderateScale(20), paddingTop: moderateScale(20)}}>
            <Text style={{fontSize: 17}}>{title}</Text>
            {subTitle && (
              <Text style={{fontSize: 14, opacity: 0.5, paddingTop: moderateScale(5)}}>
                {subTitle}
              </Text>
            )}
          </View>

          <View style={{height: verticalScale(0.5), backgroundColor: colors.grey}} />
        </TouchableOpacity>
      ))}
    </ScrollView>

    </>
  );
};

export default SettingsComponent;

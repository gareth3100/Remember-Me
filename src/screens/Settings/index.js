import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Text, View} from 'react-native';
import SettingsComponent from '../../components/SettingsComponent';

const Settings = () => {
  const [email, setEmail] = React.useState(null);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [sortBy, setSortBy] = React.useState(null);

  const saveSetting = (key, value) => {
    AsyncStorage.setItem(key, value);
  }

  const settingsOptions = [
    {title: 'My Info', subTitle: 'Setup Your Profile', onPress: () => {}},
    {title: 'Accounts', subTitle: 'Setup Your Profile', onPress: () => {}},
    {
      title: 'Default Account for New Contacts',
      subTitle: email,
      onPress: () => {},
    },
    {
      title: 'Contacts to Display',
      subTitle: 'Setup Your Profile',
      onPress: () => {},
    },
    {title: 'Sort By', subTitle: sortBy, onPress: () => {setModalVisible(true)}},
    {title: 'Name Format', subTitle: 'Setup Your Profile', onPress: () => {}},
    {title: 'Import', subTitle: 'Setup Your Profile', onPress: () => {}},
    {title: 'Export', subTitle: 'Setup Your Profile', onPress: () => {}},
    {
      title: 'Blocked Numbers',
      subTitle: 'Setup Your Profile',
      onPress: () => {},
    },
    {
      title: 'About Remember Me',
      subTitle: 'Setup Your Profile',
      onPress: () => {},
    },
  ];

  const prefArray = [
    {name: 'First Name', selected: false, onPress: () => {
      saveSetting('sortBy', 'First Name');
      setSortBy("First Name");
      setModalVisible(false);
    }},
    {name: 'Last Name', selected: false, onPress: () => {
      saveSetting('sortBy', 'Last Name');
      setSortBy("Last Name");
      setModalVisible(false);
    }},
  ];

  const getSettings = async () => {
    const user = await AsyncStorage.getItem('user');
    setEmail(JSON.parse(user).email);

    const sortPref = await AsyncStorage.getItem('sortBy');
    if(sortPref){
      setSortBy(sortPref);
    }
  };


  useEffect(() => {
    getSettings()
  }, [])

  return <SettingsComponent 
  modalVisible={modalVisible} 
  setModalVisible={setModalVisible} 
  settingsOptions={settingsOptions} 
  prefArray={prefArray}
  />;
};

export default Settings;
import React from 'react';

import {Text, View} from 'react-native';
import SettingsComponent from '../../components/SettingsComponent';

const Settings = () => {
  const settingsOptions = [
    {title: 'My Info', subTitle: 'Setup Your Profile', onPress: () => {}},
    {title: 'Accounts', subTitle: 'Setup Your Profile', onPress: () => {}},
    {
      title: 'Default Account for New Contacts',
      subTitle: 'Setup Your Profile',
      onPress: () => {},
    },
    {
      title: 'Contacts to Display',
      subTitle: 'Setup Your Profile',
      onPress: () => {},
    },
    {title: 'Sort By', subTitle: 'Setup Your Profile', onPress: () => {}},
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
  return <SettingsComponent settingsOptions={settingsOptions} />;
};

export default Settings;

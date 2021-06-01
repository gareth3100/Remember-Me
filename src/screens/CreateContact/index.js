import React, {useContext, useEffect, useRef, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Text, View} from 'react-native';
import CreateContactComponent from '../../components/CreateContactComponent';
import createContact from '../../context/contacts/createContact';
import {GlobalContext} from '../../context/Provider';
import {CONTACT_DETAIL, CONTACT_LIST} from '../../constants/routeNames';

const CreateContact = () => {
  const {contactsDispatch, 
    // contactsState: {
    //   createContact:{loading, error},
    // }
  } = useContext(GlobalContext);

  const [form, setForm] = useState({});
  const sheetRef = useRef(null);
  const [localFile, setLocalFile] = useState(null);
  const {navigate, setOptions} = useNavigation();
  
  const onChangeText = ({name, value})=>{
    setForm({...form, [name]: value});
  };

  const onSubmit = () => {
    console.log('form', form);
    //Should send data to the createContact.js file
    createContact(form)(contactsDispatch)(() => {
          navigate(CONTACT_LIST);
        });
  };

  const openSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.open();
    }
  };
  const closeSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.close();
    }
  };

  const onFileSelected = image => {
    closeSheet();
    setLocalFile(image);
    console.log('images', image);
  };

  //console.log('Inside Create Contact')

  return (
    <CreateContactComponent
      onChangeText={onChangeText}
      form={form}
      onSubmit={onSubmit}
      setForm={setForm}
      sheetRef={sheetRef}
      closeSheet={closeSheet}
      openSheet={openSheet}
      onFileSelected={onFileSelected}
      localFile={localFile}
      // loading={loading}
      // error={error}
    />
  );
};

export default CreateContact;
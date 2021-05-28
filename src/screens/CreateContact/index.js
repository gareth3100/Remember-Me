import React, {useContext, useRef, useState} from 'react';

import {Text, View} from 'react-native';
import CreateContactComponent from '../../components/CreateContactComponent';
import createContact from '../../context/contacts/createContact';
import {GlobalContext} from '../../context/Provider';

const CreateContact = () => {
  const {contactsDispatch} = useContext(GlobalContext);
  const [form, setForm] = useState({});
  const sheetRef = useRef(null);
  const [localFile, setLocalFile] = useState(null);
  
  const onChangeText = ({name, value})=>{
    setForm({...form, [name]: value});
  };

  const onSubmit = () => {
    console.log('form',form);
    console.log('form :<<', form.birthDate);

    //Should send data to the createContact.js file
    createContact(form)(contactsDispatch);
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

  console.log('Inside Create Contact')

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
    />
  );
};

export default CreateContact;
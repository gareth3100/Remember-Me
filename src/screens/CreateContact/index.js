import React, {useContext, useEffect, useRef, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Text, View} from 'react-native';
import CreateContactComponent from '../../components/CreateContactComponent';
import createContact from '../../context/actions/contacts/createContact';
import {GlobalContext} from '../../context/Provider';
import {CONTACT_DETAIL, CONTACT_LIST} from '../../constants/routeNames';
import countryCodes from '../../utils/countryCodes';
import contacts from '../../context/reducers/contacts';
import editContact from '../../context/actions/contacts/editContact';

const CreateContact = () => {
  const {
    contactsDispatch, 
    contactsState: {
      createContact:{loading, error},
    }
  } = useContext(GlobalContext);

  const [form, setForm] = useState({});
  const sheetRef = useRef(null);
  const [localFile, setLocalFile] = useState(null);
  const {navigate, setOptions} = useNavigation();
  const { params } = useRoute();

  //This useEffect is used to save the data, so that we may edit contacts again
  useEffect (() => {
    if(params?.contacts){

      setOptions({title: 'Update Contact'});

      const {
        firstName,
        lastName,
        phoneNumber,
        relationship,
        birthDate,
        address,
        memory,
        isFavorite,
        countryCode,
        phoneCode,
      } = params?.contacts;
      setForm(prev=>{
        return{
          ...prev,
          firstName, 
          lastName, 
          phoneNumber, 
          relationship, 
          birthDate, 
          address, 
          memory, 
          isFavorite, 
          countryCode,
          phoneCode: countryCode,
        };
      });

      //Helps add country area code
      const country=countryCodes.find(item=>{
        return item.value.replace('+','') === countryCode
      });

      if(country){
        setForm(prev=>{
          return{
            ...prev,
            countryCode: country.key.toUpperCase()
          };
        });
      }

      //This next part is to update the contact photo once we get that working
      //Presumably, we named the picture 'contactPicture'
      // if(params?.contacts?.contactPicture){
      //   setLocalFile(params?.contacts.contactPicture)
      // }
    }
  }, [])

  
  const onChangeText = ({name, value})=>{
    setForm({...form, [name]: value});
  };

  const onSubmit = () => {
    if(params?.contacts){
      editContact(form, params?.contacts.id)(contactsDispatch)((item) => {
        navigate(CONTACT_DETAIL, {item});
      })
    //Should send data to the createContact.js file
    } else { 
      createContact(form)(contactsDispatch)((item) => {
        navigate(CONTACT_DETAIL, {item});
      }) 
    }
  };

  const toggleValueChange = () => {
    setForm({...form, "isFavorite": !form.isFavorite});
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

  return (
    <CreateContactComponent
      onChangeText={onChangeText}
      form={form}
      onSubmit={onSubmit}
      setForm={setForm}
      loading={loading}
      error={error}
      toggleValueChange={toggleValueChange}
      sheetRef={sheetRef}
      closeSheet={closeSheet}
      openSheet={openSheet}
      onFileSelected={onFileSelected}
      localFile={localFile}
    />
  );
};

export default CreateContact;
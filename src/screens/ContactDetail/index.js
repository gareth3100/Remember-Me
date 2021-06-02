import { useRoute } from '@react-navigation/core';
import React from 'react';
import { Text,View } from 'react-native';
import ContactDetailComponent from '../../components/ContactDetailComponent';

const ContactDetail = () => {

    const {params:{item={}} = {}} = useRoute();
    console.log('item', item)

    return <ContactDetailComponent contacts={item}/>;
};

export default ContactDetail;
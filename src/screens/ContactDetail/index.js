import {useNavigation, useRoute} from '@react-navigation/native';
import React, { useEffect, useContext } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../assets/theme/colors';
import Icon from '../../components/common/Icon';
import ContactDetailComponent from '../../components/ContactDetailComponent';
import { CONTACT_LIST } from '../../constants/routeNames';
import deleteContact from '../../context/contacts/deleteContact';
import {GlobalContext} from '../../context/Provider'

const ContactDetail = () => {

    const { params: { item = {} } = {} } = useRoute();
    const { contactsDispatch } = useContext(GlobalContext);
    const { setOptions,navigate } = useNavigation();

    useEffect(() => {
        if (item) {
            setOptions({
                title: item.firstName + " " + item.lastName,
                headerRight: () => {
                    return (
                        <View style={{flexDirection: 'row', paddingRight: 10}}>
                            <TouchableOpacity>
                                <View>
                                    <Icon 
                                        size={21} 
                                        color = {colors.grey}
                                        name={item.isFavorite ? "star" : "star-border"} 
                                        type="material" 
                                    />
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{paddingLeft: 10}} onPress={()=>{
                                deleteContact(item.id)(contactsDispatch)(() => {
                                    navigate(CONTACT_LIST);
                                });
                            }}>
                                <View>
                                    <Icon 
                                        size={21} 
                                        color = {colors.grey}
                                        name="delete" 
                                        type="material" 
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>

                    );
                },
            });
        }
    }, [item])

    return <ContactDetailComponent contacts={item} />;
};

export default ContactDetail;
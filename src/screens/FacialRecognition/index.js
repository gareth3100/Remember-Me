import React from 'react';
import { Text,View } from 'react-native';
import {useNavigation} from '@react-navigation/native';

const FacialRecognition = () => {
    const {navigate} = useNavigation();
    return(
        <View>
            <Text>Hello from Facial Recognition!</Text>
        </View>
    );
};

export default FacialRecognition;
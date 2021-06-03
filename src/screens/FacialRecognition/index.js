import React from 'react';
import { Text,TouchableOpacity,View } from 'react-native';
import {useNavigation} from '@react-navigation/native';

const FacialRecognition = () => {
    const {navigate} = useNavigation();

    return(
        <View style={{backgroundColor: 'white'}}>
            <Text style={{alignSelf: 'center', fontSize: 25}}>Hello from Facial Recognition!</Text>
        </View>
    );
};

export default FacialRecognition;
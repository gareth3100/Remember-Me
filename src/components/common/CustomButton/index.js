import React from 'react';
import { View, Text, TextInput, Touchable, TouchableOpacity, ActivityIndicator } from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';

const CustomButton = ({ title, secondary, primary, danger, onPress, disabled, loading, }) => {

    const getBackgroundColor = () => {
        if(disabled){
            return colors.grey;
        }

        if(primary){
            return colors.primary;
        }
        if(danger){
            return colors.danger;
        } 
        if(secondary){
            return colors.secondary;
        } 
    };

    return (
        <TouchableOpacity 
            disabled = {disabled}
            onPress={onPress}
            style={[styles.wrapper, {backgroundColor: getBackgroundColor()}]}>
                <View style={[styles.loaderSection]}>
                    {loading && <ActivityIndicator color={primary? colors.secondary : colors.primary}/>}
                    {title && <Text style={{color:disabled ? "black":colors.white, paddingLeft:loading?5:0}}>{title}</Text>}
                </View>
        </TouchableOpacity>
    );
};

export default CustomButton;
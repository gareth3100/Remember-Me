import React from 'react';
import { Text, TextInput, View, ActivityIndicator } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {color} from 'react-native-reanimated';
import styles from './styles';
import colors from '../../../assets/theme/colors';

const CustomButton = ({
    title,
    primary,
    danger,
    secondary,
    disabled,
    loading,
    onPress,
    style,
}) => {

    const getBgColor = () => {
        if(disabled){
            return colors.grey;
        }

        if(danger){
            return colors.danger;
        }

        if(primary){
            return colors.primary;
        }

        if(secondary){
            return colors.secondary;
        }

    };

    //if the usr passes in a label then if user passes in an icon
    return (
        <TouchableOpacity 
        
        disabled = {disabled}
        onPress = {onPress}
        style={[styles.wrapper, {backgroundColor: getBgColor()}, style]}>

            <View style={[styles.loaderSection]}>
                {loading && 
                (<ActivityIndicator 
                    color={primary? colors.secondary: colors.primary}
                />
                )}

            {title && (
                <Text style={
                    {color : disabled? "black" : colors.white, 
                    paddingLeft : loading? 5: 0}}>
                    {title}
                </Text>
            )}
        </View>            
                
        </TouchableOpacity>
    );
};

export default CustomButton;
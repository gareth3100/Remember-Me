import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import { Image, Text, TextInput, View } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {REGISTER} from '../../constants/routeNames';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';
import CustomButton from '../../components/common/CustomButton';
import styles from './styles'


const LoginComponent = ({
    error,
    form,
    justSignedUp,
    onChange,
    loading,
    onSubmit,
}) => {

    const {navigate} = useNavigation();
    const [isSecureEntry, setIsSecureEntry] = useState(true);

    return(
        <Container>
            <Image 
                height={70} 
                width={70} 
                source={require('../../assets/images/logo.png')} 
                style={styles.logoImage}
            />


            <View>
                <Text style={styles.title}>Welcome to Remember Me</Text>

                <View style={styles.form}>

                <Input
                    label="Username"
                    iconPosition='right'
                    placeholder="Enter Username"
                    //error={"This field is required"}
                />

                <Input
                    label="Password"
                    placeholder="Enter Password"
                    secureTextEntry={isSecureEntry}
                    icon={
                        <TouchableOpacity
                            onPress={() => {
                            setIsSecureEntry((prev) => !prev);
                            }}>
                            <Text>{isSecureEntry ? 'Show' : 'Hide'}</Text>
                        </TouchableOpacity>
                    }
                    iconPosition="right"
                    onChangeText={(value) => {
                    onChange({name: 'password', value});
                    }}
                />
                <CustomButton
                    disabled={loading}
                    onPress={onSubmit}
                    loading={loading}
                    primary
                    title="Submit"
                />
                        
                <View style={styles.createSection}>
                    <Text style={styles.infoText}>Need a new account?</Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigate(REGISTER);
                        }}>
                        <Text style={styles.linkBtn}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Container>
    );
};

export default LoginComponent;

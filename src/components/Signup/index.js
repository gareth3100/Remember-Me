import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import { Image, Text, TextInput, View } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {LOGIN} from '../../constants/routeNames';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';
import CustomButton from '../../components/common/CustomButton';
import styles from './styles'


const RegisterComponent = ({
    onSubmit,
    onChange,
    form,
    loading,
    error,
    errors,
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


            <View style={styles.footer}>
                <Text style={styles.title}>Welcome to Remember Me</Text>
                <Text style={styles.subTitle}>Create an account</Text>

                <View style={styles.form}>

                <Input
                    label="First name"
                    iconPosition='right'
                    placeholder="Enter First Name"
                    onChangeText = {(value) => {
                        onChange({name: "firstName", value});
                    }}
                    //error={"This field is required"}
                    error = {errors.firstName}
                />
                <Input
                    label="Last name"
                    iconPosition='right'
                    placeholder="Enter Last Name"
                    onChangeText = {(value) => {
                        onChange({name: "lastName", value});
                    }}
                    //error={"This field is required"}
                    error = {errors.lastName}
                />

                <Input
                    label="Email"
                    iconPosition='right'
                    placeholder="Enter Email"
                    onChangeText = {(value) => {
                        onChange({name: "emailName", value});
                    }}
                    //error={"This field is required"}
                    error = {errors.emailName}
                />

                <Input
                    label="Username"
                    iconPosition='right'
                    placeholder="Enter Username"
                    //error={"This field is required"}
                    error = {errors.userName}
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
                    error = {errors.password}
                />

                <CustomButton
                    loading={loading}
                    onPress={onSubmit}
                    disabled={loading}
                    primary 
                    title="Submit"
                />
                        
                <View style={styles.createSection}>
                    <Text style={styles.infoText}>Already have an account?</Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigate(LOGIN);
                        }}>
                        <Text style={styles.linkBtn}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Container>
    );
};

export default RegisterComponent;

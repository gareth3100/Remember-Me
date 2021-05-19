import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import { Text,View, Image} from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import styles from './styles';
import {LOGIN} from '../../constants/routeNames';

const RegisterComponent = ({onSubmit, onChange, form, errors, error}) => {
    const {navigate} = useNavigation();
    return(
        <Container>
            <Image height={70} width={70} source={require('../../assets/images/logo.png')} style={styles.logoImage}/>
            
            <View>
                <Text style={styles.title}>Welcome to Remember Me!</Text>
                <Text style={styles.subTitle}>Create a Free Account!</Text>

                <View style={styles.form}>

                    <Input 
                        label="Username"
                        iconPosition='right'
                        placeholder="Enter Username"
                        error={errors.userName}
                        onChangeText={(value)=>{
                            onChange({name:'userName', value});
                        }}
                    />

                    <Input 
                        label="First Name"
                        iconPosition='right'
                        placeholder="Enter First Name"
                        error={errors.firstName}
                        onChangeText={(value)=>{
                            onChange({name:'firstName', value});
                        }}
                    />

                    <Input 
                        label="Last Name"
                        iconPosition="right"
                        placeholder="Enter Last Name"
                        error={errors.lastName}
                        onChangeText={(value)=>{
                            onChange({name:'lastName', value});
                        }}
                    />

                    <Input 
                        label="Email"
                        iconPosition='right'
                        placeholder="Enter Email"
                        error={errors.email}
                        onChangeText={(value)=>{
                            onChange({name:'email', value});
                        }}
                    />

                    <Input 
                        label="Password"
                        icon={<Text>Show</Text>}
                        secureTextEntry={true}
                        iconPosition="right"
                        placeholder="Enter Password"
                        error={errors.password}
                        onChangeText={(value)=>{
                            onChange({name:'password', value});
                        }}
                    />

                    <CustomButton onPress={onSubmit} primary title="Submit"/>

                    <View style={styles.createSection}>
                        <Text style={styles.infoText}>Have an account already?</Text>
                        <TouchableOpacity onPress={ () => 
                            {navigate(LOGIN);
                        }}>
                        <Text style={styles.linkButton}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Container>
    );
};

export default RegisterComponent;
import React from 'react'
import {useNavigation} from '@react-navigation/native';
import { Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import styles from './styles';
import {REGISTER} from '../../constants/routeNames';

const LoginComponent = () => {
    const {navigate} = useNavigation();
    return(
        <Container>
            <Image height={70} width={70} source={require('../../assets/images/logo.png')} style={styles.logoImage}/>
            
            <View>
                <Text style={styles.title}>Welcome to Remember Me!</Text>
                <Text style={styles.subTitle}>Please Login</Text>

                <View style={styles.form}>
                    <Input 
                        label="Username"
                        iconPosition='right'
                        placeholder="Enter Username"
                        //error={'This field is required'}
                    />

                    <Input 
                        label="Password"
                        icon={<Text>Show</Text>}
                        secureTextEntry={true}
                        iconPosition="right"
                        placeholder="Enter Password"
                    />

                    <CustomButton primary title="Submit"/>

                    <View style={styles.createSection}>
                        <Text style={styles.infoText}>Need a new account?</Text>
                        <TouchableOpacity onPress={ () => 
                            {navigate(REGISTER);
                        }}>
                        <Text style={styles.linkButton}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </Container>
    );
};

export default LoginComponent;
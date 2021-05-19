import React, {useState} from 'react'
import {useNavigation} from '@react-navigation/native';
import { Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import styles from './styles';
import {REGISTER} from '../../constants/routeNames';

const LoginComponent = (
    error,
    form,
    justSignedUp,
    onChange,
    loading,
    onSubmit,
) => {
    const {navigate} = useNavigation();
    const [isSecureEntry, setIsSecureEntry] = useState(true);
    return(
        <Container>
            <Image height={70} 
            width={70} 
            source={require('../../assets/images/logo.png')} 
            style={styles.logoImage}
            />
            
            <View>
                <Text style={styles.title}>Welcome to Remember Me!</Text>
                <Text style={styles.subTitle}>Please Login</Text>

                <View style={styles.form}>
                    <Input 
                        label="Email"
                        iconPosition='right'
                        placeholder="Enter Email"
                        value={form.email || null}
                        //error={'This field is required'}
                    />

                    <Input 
                        label="Password"
                        icon={<Text>Show</Text>}
                        secureTextEntry={true}
                        iconPosition="right"
                        placeholder="Enter Password"
                        value={form.password || null}
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
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import {REGISTER} from '../../constants/routeNames';
import Message from '../common/Message';
import styles from './styles';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

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
            <Image height={verticalScale(70)} 
                width={scale(70)} 
                source={require('../../assets/images/RM_Logo.png')} 
                style={styles.logoImage}
            />
            
            <View>
                <Text style={styles.title}>Welcome to Remember Me!</Text>
                <Text style={styles.subTitle}>Please Login</Text>

                <View style={styles.form}>
                    {justSignedUp && (
                        <Message
                        onDismiss={() => {}}
                        success
                        message="Account created successfully"
                        />
                    )}
                    {error && !error.error && (
                        <Message
                        onDismiss={() => {}}
                        danger
                        message="invalid credentials"
                        />
                    )}

                    {error?.error && <Message danger onDismiss message={error?.error} />}
                    
                    <Input 
                        label="Email"
                        iconPosition='right'
                        placeholder="Enter Email"
                        value={form.email || null}
                        onChangeText={(value) => {
                            onChange({name: 'email', value});
                        }}
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
                        secondary title="Log in"
                    />

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
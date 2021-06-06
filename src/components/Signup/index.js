import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import { Text, View, Image} from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import styles from './styles';
import {LOGIN} from '../../constants/routeNames';
import BackgroundColor from 'react-native-background-color';
import { verticalScale } from 'react-native-size-matters';

const RegisterComponent = ({onSubmit, onChange, form, loading, errors, error}) => {
    const {navigate} = useNavigation();
    const [isSecureEntry, setIsSecureEntry] = useState(true);

    return(
        <Container>
            <Image 
                height={verticalScale(70)} 
                width={70} 
                source={require('../../assets/images/transparent-brain-24.png')} 
                style={styles.logoImage}
            />
            
            <View>
                <Text style={styles.title}>Welcome to Remember Me!</Text>
                <Text style={styles.subTitle}>Create a Free Account!</Text>

                <View style={styles.form}>

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
                        error={errors.password || error?.password?.[0]}
                        onChangeText={(value) => {
                            onChange({name: 'password', value});
                        }}
                    />

                    <CustomButton 
                        loading={loading}
                        onPress={onSubmit}
                        disabled={loading}
                        primary title="Submit"
                    />

                    <View style={styles.createSection}>
                        <Text style={styles.infoText}>Have an account already?</Text>
                        <TouchableOpacity onPress={ () => 
                            {
                                navigate(LOGIN);
                            }
                        }>
                        <Text style={styles.linkButton}>Log in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Container>
    );
};

export default RegisterComponent;
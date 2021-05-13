import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import { Image, Text, TextInput, View } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {LOGIN, CONTACT_LIST} from '../../constants/routeNames';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';
import CustomButton from '../../components/common/CustomButton';
import styles from './styles'
import { firebase } from '../../firebase/config'

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
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    

     const onRegisterPress = () => {
        if (password !== confirmPassword) {
            alert("Passwords don't match.")
            return
        }
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const data = {
                    id: uid,
                    email,
                    firstName,
                    lastName,
                };
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                        navigate(CONTACT_LIST)
                    })
                    .catch((error) => {
                        alert(error)
                    });
            })
            .catch((error) => {
                alert(error)
        });
    }

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
                {error?.error && (
                    <Message retry danger retryFn={onSubmit} message={error?.error} />
                )}
                <Input
                    label="First name"
                    iconPosition='right'
                    placeholder="Enter first name"
                    onChangeText={(text) => setFirstName(text)}
                    value={firstName}
                    //error={"This field is required"}
                    /*onChangeText={(value) => {
                        onChange({name: 'firstName', value});
                    }}*/
                />
                <Input
                    label="Last name"
                    iconPosition='right'
                    placeholder="Enter Last name"
                    onChangeText={(text) => setLastName(text)}
                    value={lastName}
                    /*onChangeText={(value) => {
                        onChange({name: 'lastName', value});
                    }}*/
                    //error={"This field is required"}
                />

                <Input
                    label="Email"
                    iconPosition='right'
                    placeholder="Enter Email"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    //error={"This field is required"}
                    /*onChangeText={(value) => {
                        onChange({name: 'email', value});
                    }}*/
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
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    iconPosition="right"
                    /*onChangeText={(value) => {
                        onChange({name: 'password', value});
                  
                    }}*/
                />

                <Input
                    label="Confirm Password"
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
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    iconPosition="right"
                    /*onChangeText={(value) => {
                        onChange({name: 'password', value});
                    }}*/
                />

                <CustomButton
                    loading={loading}
                    onPress={() => onRegisterPress()}
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

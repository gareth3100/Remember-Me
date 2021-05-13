import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import { Image, Text, TextInput, View } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {REGISTER, CONTACT_LIST} from '../../constants/routeNames';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';
import CustomButton from '../../components/common/CustomButton';
import styles from './styles'
import { firebase } from '../../firebase/config';


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

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onLoginPress = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .get()
                    .then(firestoreDocument => {
                        if (!firestoreDocument.exists) {
                            alert("User does not exist anymore.")
                            return;
                        }
                        const user = firestoreDocument.data()
                        navigate(CONTACT_LIST)
                    })
                    .catch(error => {
                        alert(error)
                    });
            })
            .catch(error => {
                alert(error)
            })
    }

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
                    label="Email"
                    iconPosition='right'
                    placeholder="Enter email"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    
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
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    iconPosition="right"
                />
                <CustomButton
                    disabled={loading}
                    onPress={() => onLoginPress()}
                    loading={loading}
                    primary
                    title="Log in"
                />
                        
                <View style={styles.createSection}>
                    <Text style={styles.infoText}>Don't have an account?</Text>
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

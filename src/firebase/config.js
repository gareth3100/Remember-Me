import firebase from 'firebase/app' 
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB1NlDhnNq0W4pNkWQaYJgixSPg-ltSIcw",
    authDomain: "testapp-2cac1.firebaseapp.com",
    databaseURL: 'https://testapp-2cac1.firebaseio.com',
    projectId: "testapp-2cac1",
    storageBucket: "testapp-2cac1.appspot.com",
    messagingSenderId: "451399853071",
    appId: "1:451399853071:web:ea2de808cbe8e53a4def7a"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
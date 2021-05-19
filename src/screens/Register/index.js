import React from 'react';
import {useState, useContext} from 'react';
import RegisterComponent from '../../components/Signup';
import {LOGIN} from '../../constants/routeNames';
import {useNavigation} from '@react-navigation/native';
import register from '../../context/actions/auth/register';
import { GlobalContext } from '../../context/Provider';


const Register = () => {
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const {authDispatch}=useContext(GlobalContext);

    const onChange = ({name, value}) => {
        setForm({...form, [name]: value});
    
        if (value !== '') {
          if (name === 'password') {
            if (value.length < 6) {
              setErrors((prev) => {
                return {...prev, [name]: 'This field needs min 6 characters'};
              });
            } else {
              setErrors((prev) => {
                return {...prev, [name]: null};
              });
            }
          } else {
            setErrors((prev) => {
              return {...prev, [name]: null};
            });
          }
        } else {
          setErrors((prev) => {
            return {...prev, [name]: 'This field is required'};
          });
        }
    };

    const onSubmit = () => {
        //validations
        console.log('form :>> ', form.email);

        if(!form.userName){
            setErrors((prev)=>{
                return{...prev,userName:'Please provide a username'};
            });
        }

        if(!form.firstName){
            setErrors((prev)=>{
                return{...prev,firstName:'Please provide a first name'};
            });
        }

        if(!form.lastName){
            setErrors((prev)=>{
                return{...prev,lastName:'Please provide a last name'};
            });
        }

        if(!form.email){
            setErrors((prev)=>{
                return{...prev,email:'Please provide an email'};
            });
        }

        if(!form.password){
            setErrors((prev)=>{
                return{...prev,password:'Please provide a password'};
            });
        }

        if(Object.values(form).length === 5 &&
           Object.values(form).every((item) => item.trim().length>0) &&
           Object.values(errors).every((item) => !item)
        ) {
            register(form)(authDispatch);
        }
    }

    return(
        <RegisterComponent onSubmit={onSubmit} onChange={onChange} form={form} errors={errors}/>
    );
};

export default Register;